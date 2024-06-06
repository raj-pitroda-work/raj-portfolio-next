"use client";
import ZoomVideo, { PassiveStopShareReason, Stream } from "@zoom/videosdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoDocumentText, IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";

interface VideoCallState {
  isVideoOn: boolean;
  isPatientVideoOn: boolean;
  isAudioOn: boolean;
  isSharingScreen: boolean;
  isCanvasUsed: boolean;
  isPatientSharingScreen: boolean;
}

function VideoCall() {
  const router = useRouter();
  const currentUser: any = {};
  const initialVideoState = {
    isAudioOn: false,
    isCanvasUsed: false,
    isPatientSharingScreen: false,
    isPatientVideoOn: false,
    isSharingScreen: false,
    isVideoOn: false,
  };

  const videoCallStateRef: any = React.useRef(initialVideoState);
  const [videoCallState, setVideoCallState] =
    useState<VideoCallState>(initialVideoState);

  const [viewUrl, setViewUrl] = useState("");
  const [zoomReady, setZoomReady] = useState<boolean>(false);
  let mediaStream: any = useRef<typeof Stream>(null);
  const [isSupportGalleryView, setIsSupportGalleryView] = useState<any>();
  const [chatClient, setChatClient] = useState<any>(null);
  const [liveChats, setLiveChats] = useState<any[]>([]);
  const [doctorUser, setDoctorUser] = useState<any>([]);
  const [patientUser, setPatientUser] = useState<any>({});
  let patientUserRef = useRef<any>({});
  const [appointmentDetail, setAppointmentDetails] = useState<any | null>(null);
  const [sessionLeaveConfirm, setSessionLeaveConfirm] =
    useState<boolean>(false);
  const [showGeneratePrescriptionModal, setShowGeneratePrescriptionModal] =
    useState(false);

  const zmClient = ZoomVideo.createClient();

  // useEffect(() => {
  //   const handleRouteChange = async (url: string) => {
  //     const currentPath = router.pathname.replace(
  //       "[id]",
  //       appointmentId as string
  //     );
  //     console.log(
  //       zoomReady,
  //       router.pathname,
  //       url,
  //       currentPath,
  //       url.startsWith(currentPath)
  //     );
  //     if (zoomReady && !url.startsWith(currentPath)) {
  //       await zmClient.leave();
  //       ZoomVideo.destroyClient();
  //     }
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   return () => {
  //     console.log("unmounting component...");
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router, zoomReady]);

  useEffect(() => {
    loadData();
  }, []);

  const selfVideoElementId = "self-view-video",
    selfCanvasElementId = "self-view-canvas";
  const patientCanvasElementId = "participants-canvas";
  const patientScreenCanvasElementId = "participants-screen-canvas";
  const screenShareVideoElementId = "screen-share-video",
    screenShareCanvasElementId = "screen-share-canvas";
  const mainViewWidth = 960,
    mainViewHeight = 540;
  const smallViewwidth = 130,
    smallViewHeight = 100;

  // querySelector function
  const qs = (elementId: string) => {
    return document.querySelector(`#${elementId}`);
  };

  const selfViewVideoCords = (forFullView = false) => {
    if (forFullView || !videoCallState?.isPatientVideoOn) {
      return {
        w: mainViewWidth,
        h: mainViewHeight,
        x: 0,
        y: 0,
      };
    } else {
      return {
        w: smallViewwidth,
        h: smallViewHeight,
        x: mainViewWidth - smallViewwidth - 20,
        y: mainViewHeight - smallViewHeight - 20,
      };
    }
  };

  const elements: any = {
    selfVideo: (): HTMLVideoElement =>
      qId(selfVideoElementId) as HTMLVideoElement,
    selfCanvas: (): HTMLCanvasElement =>
      qs(selfCanvasElementId) as HTMLCanvasElement,
    screenShareVideo: (): HTMLVideoElement =>
      qId(screenShareVideoElementId) as HTMLVideoElement,
    screenShareCanvas: (): HTMLCanvasElement =>
      qs(screenShareCanvasElementId) as HTMLCanvasElement,
    patientCanvas: (): HTMLCanvasElement =>
      qs(patientCanvasElementId) as HTMLCanvasElement,
    patientScreenCanvas: (): HTMLCanvasElement =>
      qs(patientScreenCanvasElementId) as HTMLCanvasElement,
  };

  // getElementById function
  const qId = (elementId: string) => {
    return document.getElementById(elementId);
  };

  const loadData = async () => {
    await initZoomCall();
  };

  const stopMyVideo = async () => {
    try {
      console.log("My video stopped");
      await mediaStream.current?.stopVideo();
      updateVideoState({ isVideoOn: false });
    } catch (err: any) {
      console.log("Error while video off", err);
    }
  };

  const updateVideoState = (stateChanges: Partial<VideoCallState>) => {
    //console.log(newVideoState);
    videoCallStateRef.current = {
      ...(videoCallStateRef.current || videoCallState),
      ...stateChanges,
    };
    setVideoCallState(videoCallStateRef.current);
  };

  const stopPatientVideo = async () => {
    if (videoCallStateRef.current.isPatientVideoOn) {
      console.log("stopPatientVideo", patientUserRef.current.userId);
      try {
        await mediaStream.current?.stopRenderVideo(
          elements.patientCanvas(),
          patientUserRef.current.userId,
          null,
          null,
          false
        );
      } catch (err: any) {
        console.log("Error stopping patient video", err);
      }
      updateVideoState({ isPatientVideoOn: false });
    }
  };

  const onUserAdded = useCallback((payload: any) => {
    console.log(payload[0], zmClient?.getCurrentUserInfo()?.userId);
    if (
      payload?.length &&
      payload[0]?.userId !== zmClient?.getCurrentUserInfo()?.userId
    ) {
      setPatientUser(payload[0]);
      patientUserRef.current = payload[0];
      toast.success(`Patient joined the call`, {
        toastId: "patient-joined-alert",
      });
    }
  }, []);

  const onUserLeft = useCallback((payload: any) => {
    if (
      payload?.length &&
      payload[0]?.userId &&
      payload[0]?.userId !== zmClient?.getCurrentUserInfo()?.userId
    ) {
      toast.success(`Patient left the call`, {
        toastId: "patient-left-alert",
      });
    }
  }, []);

  const onPeerVideoStateChange = useCallback(
    async (payload: any) => {
      console.log("peer-video-state-change", payload);
      if (payload.action === "Start") {
        await mediaStream.current?.renderVideo(
          elements.patientCanvas(),
          payload.userId,
          mainViewWidth,
          mainViewHeight,
          0,
          0,
          2
        );
        updateVideoState({ isPatientVideoOn: true });
      } else if (payload.action === "Stop") {
        await stopPatientVideo();
      }
    },
    [mediaStream.current]
  );

  const onPassivelyStopShare = useCallback(
    (payload: PassiveStopShareReason) => {
      if (payload === "StopScreenCapture") {
        updateVideoState({ isSharingScreen: false });
      }
    },
    []
  );

  const onActiveShareChange = useCallback(async (payload: any) => {
    console.log("self video change");
    if (payload.state === "Active") {
      //await stopPatientVideo();
      //await stopMyVideo();
      await mediaStream.current?.startShareView(
        elements.patientScreenCanvas(),
        payload.userId
      );
      updateVideoState({ isPatientSharingScreen: true });
    } else if (payload.state === "Inactive") {
      await mediaStream.current?.stopShareView();
      updateVideoState({ isPatientSharingScreen: false });
    }
  }, []);

  useEffect(() => {
    zmClient?.on("user-added", onUserAdded);
    zmClient?.on("user-removed", onUserLeft);

    // Video state change of participant
    zmClient?.on("peer-video-state-change", onPeerVideoStateChange);

    zmClient?.on("passively-stop-share", onPassivelyStopShare);

    // participants screen share change
    zmClient.on("active-share-change", onActiveShareChange);

    // zmClient.on("chat-on-message", onChatMessage);

    return () => {
      zmClient?.off("user-added", onUserAdded);
      zmClient?.off("user-removed", onUserLeft);

      // Video state change of participant
      zmClient?.off("peer-video-state-change", onPeerVideoStateChange);

      zmClient?.off("passively-stop-share", onPassivelyStopShare);

      // participants screen share change
      zmClient.off("active-share-change", onActiveShareChange);

      // zmClient.off("chat-on-message", onChatMessage);
    };
  }, [
    zmClient,
    onUserAdded,
    onPeerVideoStateChange,
    onPassivelyStopShare,
    onActiveShareChange,
  ]);

  const initZoomCall = async () => {
    const init = async () => {
      const RESPONSE = {
        status: "1",
        msg: "Access Token Data",
        result: {
          doctor_name: "Akbarali",
          user_name: "Raj React",
          identity: "29_8080808082",
          room: "707_29_835",
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfa2V5IjoiOXhnNzU3Q1ZRZUtaOWZfdkNId2hZQSIsInRwYyI6IjcwN18yOV84MzUiLCJyb2xlX3R5cGUiOjEsInVzZXJfaWRlbnRpdHkiOiIyOV84MDgwODA4MDgyIiwidmVyc2lvbiI6MSwiaWF0IjoxNzE3NjYyNDE5LCJleHAiOjE3MTc2OTEyMTl9.AER4595vCo_vW8UpsyQxDiWHRbni-51iwe-GYKnjLs0",
          time_slot_duration: "15",
          appointment_date: "2024-06-04 10:30:00",
        },
      };

      await zmClient.init("en-US", "Global");
      try {
        const token = RESPONSE.result.token;
        const stream = zmClient.getMediaStream();
        mediaStream.current = stream;
        setIsSupportGalleryView(stream.isSupportMultipleVideos());

        await zmClient
          .join(RESPONSE.result.room, token, RESPONSE.result.doctor_name, "")
          .then(() => {
            setZoomReady(true);
            mediaStream.current?.startAudio().catch((err: any) => {
              if (err.type !== "OPERATION_TIMEOUT") {
                toast.error("Failed to start audio");
              }
              console.log("Failed to start audio", err);
            });

            const cUser = zmClient.getCurrentUserInfo();
            setDoctorUser(cUser);
            zmClient.getAllUser().forEach((user) => {
              if (cUser.userId !== user.userId) {
                setPatientUser(user);
                patientUserRef.current = user;
                if (user.bVideoOn) {
                  stream
                    .renderVideo(
                      elements.patientCanvas(),
                      user.userId,
                      mainViewWidth,
                      mainViewHeight,
                      0,
                      0,
                      2
                    )
                    .then(() => {
                      updateVideoState({ isPatientVideoOn: true });
                    });
                }
              }
            });
          })
          .catch((e) => {
            if (e.reason && e.reason !== "duplicated operation") {
              toast.error("Error while joining zoom session");
            } else {
              setZoomReady(true);
            }

            console.log("Error while joining zoom session", e);
          });
      } catch (e: any) {
        console.log(e.reason);
      }
    };
    init();
  };

  const handleVideo = async () => {
    if (!zoomReady) {
      toast.error("Zoom has not been initialized yet. Please wait");
      return;
    }

    if (
      videoCallStateRef.current.isPatientSharingScreen ||
      videoCallStateRef.current.isSharingScreen
    ) {
      toast.error("Cannot turn on video during screen share");
      return;
    }

    if (!videoCallStateRef.current.isVideoOn) {
      const cords = selfViewVideoCords(true);
      // if Desktop Chrome, Edge, and Firefox with SharedArrayBuffer not enabled, Android browsers, and on devices with less than 4 logical processors available
      // @ts-ignore
      if (
        (!mediaStream.current?.isSupportMultipleVideos() &&
          typeof OffscreenCanvas === "function") ||
        /android/i.test(navigator.userAgent)
      ) {
        // start video - video will render automatically on HTML Video Element if MediaStreamTrackProcessor is supported
        mediaStream.current
          ?.startVideo({
            videoElement: elements.selfVideo(),
            mirrored: false,
            captureWidth: cords.w,
            captureHeight: cords.h,
          })
          .then(() => {
            // if MediaStreamTrackProcessor is not supported
            // @ts-ignore
            if (!(typeof MediaStreamTrackProcessor === "function")) {
              // render video on HTML Canvas Element
              mediaStream.current
                ?.renderVideo(
                  elements.selfCanvas(),
                  zmClient.getCurrentUserInfo().userId,
                  cords.w,
                  cords.h,
                  cords.x,
                  cords.y,
                  2
                )
                .then(() => {
                  updateVideoState({
                    isCanvasUsed: true,
                    isVideoOn: true,
                  });
                })
                .catch((error: any) => {
                  console.log(error);
                });
            } else {
              updateVideoState({
                isCanvasUsed: false,
                isVideoOn: true,
              });
            }
          })
          .catch((error: any) => {
            console.log(error);
          });
        // desktop Chrome, Edge, and Firefox with SharedArrayBuffer enabled, and all other browsers
      } else {
        // start video
        mediaStream.current
          ?.startVideo()
          .then(() => {
            // render video on HTML Canvas Element
            mediaStream.current
              ?.renderVideo(
                elements.selfCanvas(),
                zmClient.getCurrentUserInfo().userId,
                cords.w,
                cords.h,
                cords.x,
                cords.y,
                2
              )
              .then(() => {
                updateVideoState({
                  isCanvasUsed: true,
                  isVideoOn: true,
                });
              })
              .catch((error: any) => {
                console.log(error);
              });
          })
          .catch((error: any) => {
            console.log(error);
          });
      }
    } else {
      await stopMyVideo();
    }
  };

  const handleAudio = () => {
    if (!zoomReady) {
      toast.error("Zoom has not been initialized yet. Please wait");
      return;
    }

    if (!videoCallStateRef.current.isAudioOn) {
      mediaStream.current
        ?.unmuteAudio()
        .then((res: any) => {
          console.log("Audio unmute", res);
          updateVideoState({ isAudioOn: true });
        })
        .catch((err: any) => {
          console.log("Error while unmute audio", err);
        });
    } else {
      mediaStream.current
        ?.muteAudio()
        .then((res: any) => {
          updateVideoState({ isAudioOn: false });
        })
        .catch((err: any) => {
          console.log("Error while audio off", err);
        });
    }
  };

  const handleShareScreen = async () => {
    if (!zoomReady) {
      toast.error("Zoom has not been initialized yet. Please wait");
      return;
    }

    if (videoCallStateRef.current.isPatientSharingScreen) {
      toast.error(
        "Patient is currently sharing screen. Cannot share your screen"
      );
      return;
    }

    if (!videoCallStateRef.current.isSharingScreen) {
      // @ts-ignore
      if (typeof MediaStreamTrackProcessor === "function") {
        //await stopMyVideo();
        //await stopPatientVideo();

        // @ts-ignore
        await mediaStream.current?.startShareScreen(
          elements.screenShareVideo()
        );
        updateVideoState({ isSharingScreen: true });
      } else {
        await mediaStream.current?.startShareScreen(
          elements.screenShareCanvas()
        );
        updateVideoState({ isSharingScreen: true });
      }
    } else {
      await mediaStream.current?.stopShareScreen();
      updateVideoState({ isSharingScreen: false });
    }
  };

  const onEndVidoCall = () => {
    setSessionLeaveConfirm(true);
  };

  const handleConfirmSessionEnd = () => {
    zmClient.leave().then((res: any) => {
      router.push(`/appointments/details/${appointmentId}`);
      setSessionLeaveConfirm(false);
    });
  };

  const onConfirmModalCls = () => {
    setSessionLeaveConfirm(false);
  };

  const handleTabChange = (event: any) => {
    console.log(event);
  };

  useEffect(() => {
    console.log("State changed", videoCallState);
  }, [videoCallState]);

  useEffect(() => {
    console.log("Simple effect");
  }, []);

  return (
    <>
      <div className="VideocallBgcov">
        <div className="container">
          <div className="VideocallInerdata">
            <div className="VideocallInerLeft">
              <div className="VideocallBoxmain">
                <div className="VideocallBoxTop">
                  <p>#{appointmentDetail?.appointmentNumber}</p>
                  <h3>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="10.6205"
                        cy="11.2613"
                        rx="10.4643"
                        ry="10.6402"
                        fill="white"
                        fill-opacity="0.63"
                      />
                      <ellipse
                        cx="10.6216"
                        cy="11.2613"
                        rx="3.96921"
                        ry="4.03592"
                        fill="#EB5757"
                      />
                    </svg>
                  </h3>
                  <h6></h6>
                </div>
                <div className="VideocallBoxMid">
                  <video
                    id="self-view-video"
                    width="650"
                    height="400"
                    className={
                      videoCallState.isPatientVideoOn ? "small-video-box" : ""
                    }
                    style={
                      !videoCallState.isSharingScreen &&
                      !videoCallState.isPatientSharingScreen &&
                      videoCallState.isVideoOn &&
                      !videoCallState.isCanvasUsed
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  ></video>
                  <canvas
                    id="self-view-canvas"
                    width="650"
                    height="400"
                    className={
                      videoCallState.isPatientVideoOn ? "small-video-box" : ""
                    }
                    style={
                      !videoCallState.isSharingScreen &&
                      !videoCallState.isPatientSharingScreen &&
                      videoCallState.isVideoOn &&
                      videoCallState.isCanvasUsed
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  ></canvas>
                  <canvas
                    id="participants-canvas"
                    width="650"
                    height="400"
                    style={
                      !videoCallState.isSharingScreen &&
                      !videoCallState.isPatientSharingScreen &&
                      videoCallState.isPatientVideoOn
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  ></canvas>
                  <canvas
                    id="participants-screen-canvas"
                    width="650"
                    height="400"
                    style={
                      !videoCallState.isSharingScreen &&
                      videoCallState.isPatientSharingScreen
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  ></canvas>
                  <video
                    id="screen-share-video"
                    width="650"
                    height="400"
                    style={
                      videoCallState.isSharingScreen &&
                      !videoCallState.isCanvasUsed
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  ></video>
                  <canvas
                    id="screen-share-canvas"
                    width="650"
                    height="400"
                    style={
                      videoCallState.isSharingScreen &&
                      videoCallState.isCanvasUsed
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  ></canvas>
                </div>
                {zoomReady && (
                  <div className="VideocallBoxBot">
                    <div className="VideocallBoxbtnboxCov">
                      <div className="VideocallBoxInerbtnbox">
                        <a onClick={handleShareScreen}>
                          <Image
                            src={""}
                            alt="Share Screen"
                            width={40}
                            height={40}
                          />
                          <span>Share Screen</span>
                        </a>
                        <a onClick={handleVideo}>
                          <Image src={""} alt="Video" width={40} height={40} />
                          <span>Video</span>
                        </a>
                        <a onClick={handleAudio}>
                          <Image src={""} alt="Mic" width={40} height={40} />
                          <span>Mic</span>
                        </a>
                      </div>
                    </div>
                    <button className="VideoEndcallbtn" onClick={onEndVidoCall}>
                      End Call
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="VideocallInerRight">
              <div className="InfoandChatbox">
                <div className="Vidcallinfobox">
                  <div className="Vidcallinfosettop">
                    <h3>{appointmentDetail?.patient?.fullName}</h3>
                    <p>
                      {appointmentDetail?.patient?.gender === "M"
                        ? "Male"
                        : "Female"}
                      , Years
                    </p>
                    <p>
                      +{appointmentDetail?.patient?.phoneCode}{" "}
                      {appointmentDetail?.patient?.mobileNumber}
                    </p>
                    <p>{appointmentDetail?.patient?.email}</p>
                    <p>{appointmentDetail?.patient?.zaloNumber}</p>
                  </div>
                  <div className="VidcallinfosetSymp">
                    <h3>Symptoms</h3>
                    <p>
                      {appointmentDetail?.appointmentSymptoms
                        ?.map((x: any) => x.name)
                        ?.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCall;

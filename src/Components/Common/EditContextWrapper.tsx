"use client";
import React, { createContext, useContext, useState } from "react";
import { IconType } from "react-icons";
import UpdateMainDetail from "./UpdateMainDetail";
import ProfDetail from "../../../public/profile-detail.json";
import { usePathname } from "next/navigation";
import { PROFILE_DETAIL } from "@/utils/Constant";

export type PROF_DETAIL_KEY =
  | "FullName"
  | "Name"
  | "Role"
  | "MobileNo"
  | "MobileNoForView"
  | "Email1"
  | "AllEmail"
  | "LinkedIn"
  | "WhatsAppNo"
  | "Experience"
  | "ShortBio"
  | "UpdatedAt"
  | "ResumeLink"
  | "Projects"
  | "Skills"
  | "ProfImg"
  | "";

export const EditContext = createContext<{
  FullName: string;
  Name: string;
  Role: string;
  MobileNo: string;
  MobileNoForView: string;
  Email1: string;
  AllEmail: string;
  LinkedIn: string;
  WhatsAppNo: string;
  Experience: string;
  ShortBio: string;
  UpdatedAt: string;
  ResumeLink: string;
  Skills: {
    name: string;
    experience: string;
    icon: IconType;
    icnColor: string;
  }[];
  Projects: { name: string; desc: string }[];
  setDetails: (keyName: PROF_DETAIL_KEY, value: string | any[]) => void;
  addDetails: (keyName: PROF_DETAIL_KEY, index: number, value: any) => void;
  removeDetails: (keyName: PROF_DETAIL_KEY, indeX: number) => void;
  selectedKeyDetail: {
    keyName: PROF_DETAIL_KEY;
    target: EventTarget | null;
    index?: number;
    subKey?: string;
  };
  setSelectedKey: (
    key: string,
    target: EventTarget | null,
    index?: number,
    subKey?: string
  ) => void;
  saveVal: () => void;
}>({
  FullName: "",
  Name: "",
  Role: "",
  MobileNo: "",
  MobileNoForView: "",
  Email1: "",
  AllEmail: "",
  ResumeLink: "",
  LinkedIn: "",
  WhatsAppNo: "",
  Experience: "",
  ShortBio: "",
  UpdatedAt: "",
  Skills: [],
  Projects: [],
  setDetails: (name, value) => {},
  selectedKeyDetail: { keyName: "", target: null },
  setSelectedKey: (key, target, index, subKey) => {},
  removeDetails: (key, index) => {},
  saveVal: () => {},
  addDetails: () => {},
});
const EditContextWrapper: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const pathname = usePathname();

  const [details, setDetails] = useState<any>(PROFILE_DETAIL);
  const [selectedKeyDetail, setSelectedKeyDetail] = useState<{
    keyName: PROF_DETAIL_KEY;
    target: EventTarget | null;
    index: number | null;
    subKey: string;
  }>({
    keyName: "",
    target: null,
    index: null,
    subKey: "",
  });

  const saveVal = () => {
    setSelectedKeyDetail({
      keyName: "",
      target: null,
      index: null,
      subKey: "",
    });
    sessionStorage.setItem("__prof_detail", JSON.stringify(details));
  };

  return (
    <EditContext.Provider
      value={{
        ...details,
        setDetails: (keyName, value) => {
          if (
            selectedKeyDetail.index !== null &&
            selectedKeyDetail.index >= 0
          ) {
            const exVal = [...details[keyName]];
            exVal[selectedKeyDetail.index][selectedKeyDetail.subKey] = value;
            setDetails({ ...details, [keyName]: exVal });
          } else {
            setDetails({ ...details, [keyName]: value });
          }
        },
        addDetails: (keyName: PROF_DETAIL_KEY, index: number, value: any) => {
          const exVal = [...details[keyName]];
          exVal.splice(index, 0, value);
          setDetails({ ...details, [keyName]: exVal });
        },
        removeDetails: (keyName: PROF_DETAIL_KEY, index: number) => {
          setDetails({
            ...details,
            [keyName]: details[keyName].filter((x: any, i: any) => i !== index),
          });
        },
        saveVal: saveVal,
        selectedKeyDetail: selectedKeyDetail,
        setSelectedKey: (
          key: PROF_DETAIL_KEY,
          target: EventTarget,
          index?: number,
          subKey?: string
        ) => {
          setSelectedKeyDetail({
            keyName: key,
            target,
            index: index ?? null,
            subKey: subKey ?? "",
          });
        },
      }}
    >
      <div
        className={
          selectedKeyDetail.keyName && pathname.includes("create-portfolio")
            ? "open-sidebar"
            : ""
        }
      >
        {children}
      </div>
      {pathname.includes("create-portfolio") && <UpdateMainDetail />}
    </EditContext.Provider>
  );
};

export default EditContextWrapper;

export const GetUserContextValue = () => {
  const contextVal = useContext(EditContext);
  return contextVal;
};

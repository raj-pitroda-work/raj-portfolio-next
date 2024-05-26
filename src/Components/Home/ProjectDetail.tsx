"use client";
import { Grid, Typography } from "@mui/material";
import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { BiPlusCircle } from "react-icons/bi";
import OpacityAnimation from "../Common/Animations/OpacityAnimation";
import SlideAnimation from "../Common/Animations/SlideAnimation";
import SlideScaleAnimation from "../Common/Animations/SlideScaleAnimation";
import EditComp from "../Common/EditComp";
import { GetUserContextValue } from "../Common/EditContextWrapper";
import FreePikImgRender from "../Common/FreePikImgRender";
import DeleteComp from "../Common/DeleteComp";

const ProjectDetail: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animate = useAnimation();
  const values = GetUserContextValue();
  useEffect(() => {
    if (isInView) {
      animate.start("step2");
    }
  }, [isInView]);

  return (
    <>
      <Grid container className="secondary-bg" id="ProjectWrapperId">
        <Grid
          item
          md={5}
          className="flex justify-center sticky top-[190px] h-fit mt-6"
        >
          <OpacityAnimation>
            <FreePikImgRender
              src={"/ProjectBan.svg"}
              height={500}
              width={500}
              textLeft
            />
          </OpacityAnimation>
        </Grid>
        <Grid item md={7} className="overflow-x-hidden">
          <SlideAnimation translate="bottom" delay={0.1} isAllInView>
            <Typography
              component={"h2"}
              fontWeight={600}
              className="text-center pb-8 xs:mt-8 md:mt-0 c-theme-title"
            >
              Projects
            </Typography>
          </SlideAnimation>
          {values.Projects?.map((x: any, i: number) => (
            <SlideScaleAnimation delay={0.1} key={`project-detail--${x.id}`}>
              <DeleteComp
                name="Projects"
                index={i}
                isDeleteAllowed={i > 0 || values.Projects?.length > 1}
              >
                <Typography component={"div"} className="project-detail">
                  <h5 className="text-xl font-semibold">
                    <EditComp name="Projects" subKey="name" index={i}>
                      {i + 1}. {x.name}
                    </EditComp>
                  </h5>
                  <Typography
                    component={"p"}
                    variant="body2"
                    className="opacity-[0.83] text-base text-justify"
                  >
                    <EditComp name="Projects" subKey="desc" index={i}>
                      {x.desc}
                    </EditComp>
                  </Typography>
                </Typography>
              </DeleteComp>
              <div
                className="opacity-0 hover:opacity-100 flex items-center justify-center w-full relative mt-1"
                onClick={() =>
                  values.addDetails("Projects", i + 1, {
                    id: Math.random(),
                    name: `Project Tile For ${i + 2}`,
                    desc: "This is desc",
                  })
                }
              >
                <div className="add-project-line"></div>
                <div className="bg-white z-10 c-theme">
                  <BiPlusCircle fontSize={25} />
                </div>
                <div className="add-project-line"></div>
              </div>
            </SlideScaleAnimation>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectDetail;

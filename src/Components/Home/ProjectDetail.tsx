"use client";
import { Grid, Typography } from "@mui/material";
import { useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import FreePikImgRender from "../Common/FreePikImgRender";
import SlideScaleAnimation from "../Common/Animations/SlideScaleAnimation";
import OpacityAnimation from "../Common/Animations/OpacityAnimation";
import { GetUserContextValue } from "../Common/EditContextWrapper";
import SlideAnimation from "../Common/Animations/SlideAnimation";

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
            <SlideScaleAnimation delay={0.1} key={`project-detail-${i}`}>
              <Typography component={"div"} className="project-detail">
                <h5 className="text-xl font-semibold">
                  {i + 1}. {x.name}
                </h5>
                <Typography
                  component={"p"}
                  variant="body2"
                  className="opacity-[0.83] text-base"
                >
                  {x.desc}
                </Typography>
              </Typography>
              <br />
            </SlideScaleAnimation>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectDetail;

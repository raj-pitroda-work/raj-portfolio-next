"use client";
import { Grid, Typography } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import OpacityAnimation from "../Common/Animations/OpacityAnimation";
import SlideAnimation from "../Common/Animations/SlideAnimation";
import DeleteComp from "../Common/DeleteComp";
import { GetUserContextValue } from "../Common/EditContextWrapper";
import FreePikImgRender from "../Common/FreePikImgRender";
import { useState } from "react";
import AddSkillModal from "./AddSkillModal";

const DevSkills = () => {
  const values = GetUserContextValue();
  const [showAdd, setShowAdd] = useState<boolean>(false);

  return (
    <>
      <Grid container className="primary-bg" id="SkillWrapperId">
        <Grid item md={7}>
          <SlideAnimation translate="bottom" delay={0.1} isAllInView>
            <Typography
              component={"h2"}
              fontWeight={600}
              className="text-center xs:mb-7 md:mb-0 c-theme-title"
            >
              Skills
            </Typography>
          </SlideAnimation>
          <div className="flex items-center h-5/6">
            <Grid container className="xl:pr-40 lg:pr-14" spacing={2}>
              {values?.Skills?.map((x: any, i: number) => (
                <Grid item md={4} sm={3} xs={6} key={`grid-${i}`}>
                  <SlideAnimation translate="bottom" delay={0.1} isAllInView>
                    <DeleteComp
                      name="Skills"
                      index={i}
                      isDeleteAllowed={i > 0 || values?.Skills?.length > 1}
                    >
                      <div className="skill-card-wrapper">
                        <div className="skill-card">
                          <Typography
                            fontWeight={600}
                            className="flex justify-center items-center"
                            component={"div"}
                          >
                            {x.icon && (
                              <x.icon
                                className={`xs:mr-4 ${
                                  x.icnColor ? "" : "c-theme"
                                }`}
                                style={{ color: x.icnColor }}
                              />
                            )}
                            <Typography
                              className="text-center"
                              component={"div"}
                            >
                              <span className="font-bold lg:text-lg xl:text-xl md:text-lg">
                                {x.name}
                              </span>
                              <p className="font-extralight text-sm">
                                {x.experience}
                              </p>
                            </Typography>
                          </Typography>
                        </div>
                      </div>
                    </DeleteComp>
                  </SlideAnimation>
                </Grid>
              ))}
              {/* {values?.Skills?.length <= 11 && (
                <Grid item md={4} sm={3} xs={6}>
                  <SlideAnimation translate="bottom" delay={0.1} isAllInView>
                    <div className="skill-card-wrapper opacity-65">
                      <div className="skill-add-card">
                        <Typography
                          fontWeight={600}
                          className="flex justify-center items-center"
                          component={"div"}
                          onClick={() => setShowAdd(true)}
                        >
                          <BiPlus className="xs:mr-4" />
                          <Typography className="text-center" component={"div"}>
                            <span className="lg:text-lg xl:text-lg md:text-lg">
                              Add
                            </span>
                          </Typography>
                        </Typography>
                      </div>
                    </div>
                  </SlideAnimation>
                </Grid>
              )} */}
            </Grid>
          </div>
        </Grid>
        <Grid
          item
          md={5}
          className="flex items-center justify-center w-full xs:mt-4 md:mt-0"
        >
          <OpacityAnimation>
            <FreePikImgRender src={"/SkillBan.svg"} height={500} width={500} />
          </OpacityAnimation>
        </Grid>
      </Grid>
      {showAdd && (
        <AddSkillModal isOpen={showAdd} handleClose={() => setShowAdd(false)} />
      )}
    </>
  );
};

export default DevSkills;

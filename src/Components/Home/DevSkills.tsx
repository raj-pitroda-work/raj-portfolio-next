import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { BsFiletypeCss, BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import FreePikImgRender from "../Common/FreePikImgRender";
import { PROFILE_DETAIL } from "@/utils/Constant";
import SlideAnimation from "../Common/Animations/SlideAnimation";
import OpacityAnimation from "../Common/Animations/OpacityAnimation";

const DevSkills = () => {
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
              {PROFILE_DETAIL.Skills?.map((x: any) => (
                <Grid item md={4} sm={3} xs={6} key={`grid-${x.name}`}>
                  <OpacityAnimation>
                    <div className="skill-card-wrapper">
                      <div className="skill-card">
                        <Typography
                          fontWeight={600}
                          className="flex justify-center items-center"
                          component={"div"}
                        >
                          <x.icon
                            className="xs:mr-4"
                            style={{ color: x.icnColor }}
                          />
                          <Typography className="text-center" component={"div"}>
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
                  </OpacityAnimation>
                </Grid>
              ))}
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
    </>
  );
};

export default DevSkills;

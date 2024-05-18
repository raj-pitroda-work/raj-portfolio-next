import { PROFILE_DETAIL } from "@/utils/Constant";
import { Grid, Typography } from "@mui/material";
import SlideAnimation from "../Common/Animations/SlideAnimation";
import CustomBtn from "../Common/CustomBtn";
import FreePikImgRender from "../Common/FreePikImgRender";
import SocialHandlers from "./SocialHandlers";
import OpacityAnimation from "../Common/Animations/OpacityAnimation";
import SlideScaleAnimation from "../Common/Animations/SlideScaleAnimation";

const MainBanner = () => {
  return (
    <Grid
      container
      className="main-banner-wrapper primary-bg"
      id="MainBannerWrapperId"
    >
      <Grid item md={6.5} sm={12} className="xs:text-center md:text-left">
        <Typography component={"p"} className="xs:text-xl md:text-lg">
          <SlideAnimation translate="right">Hello There!</SlideAnimation>
        </Typography>
        <Typography component={"h2"} className="mt-2">
          <SlideAnimation translate="right" delay={0.1}>
            I&apos;m{" "}
            <span className="c-theme font-semibold">{PROFILE_DETAIL.Name}</span>
          </SlideAnimation>
        </Typography>
        <Typography component={"h1"} fontWeight={1000}>
          <SlideAnimation translate="right" delay={0.3}>
            {PROFILE_DETAIL.Role}
          </SlideAnimation>
        </Typography>
        <br />
        <SlideAnimation translate="right" delay={0.5}>
          <CustomBtn
            btnName="Resume / CV"
            className="font-semibold md:text-2xl xs:text-3xl border-3 xs:m-2 md:m-0 theme-style"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1js3vjJPEAlfkDNASvi2eGiqVf1_FWgQR/view?usp=sharing",
                "_blank"
              )
            }
          ></CustomBtn>
          <div className="mt-6 xs:flex xs:justify-center md:block">
            <SocialHandlers icnClass="text-3xl" />
          </div>
        </SlideAnimation>
      </Grid>
      <Grid item md={5.5} sm={12}>
        <SlideScaleAnimation>
          <FreePikImgRender height={950} width={950} src="/ban1.svg" />
        </SlideScaleAnimation>
      </Grid>
    </Grid>
  );
};

export default MainBanner;

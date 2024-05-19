import RenderRedirectLink from "@/Components/Common/RenderRedirectLink";
import AboutBanner from "@/Components/Home/AboutBanner";
import ContactMe from "@/Components/Home/ContactMe";
import DevSkills from "@/Components/Home/DevSkills";
import MainBanner from "@/Components/Home/MainBanner";
import ProjectDetail from "@/Components/Home/ProjectDetail";

export default function CreatePortfolio() {
  return (
    <div className="home-wrapper config">
      <div className="circle-navigation-wrapper flex flex-col">
        <RenderRedirectLink className="circle" hideText />
      </div>
      <MainBanner />
      <AboutBanner />
      <DevSkills />
      <ProjectDetail />
      <ContactMe />
    </div>
  );
}

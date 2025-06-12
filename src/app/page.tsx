import RenderRedirectLink from "@/Components/Common/RenderRedirectLink";
import AboutBanner from "@/Components/Home/AboutBanner";
import ContactMe from "@/Components/Home/ContactMe";
import DevSkills from "@/Components/Home/DevSkills";
import MainBanner from "@/Components/Home/MainBanner";
import ProjectDetail from "@/Components/Home/ProjectDetail";

export default function Home() {
  return (
    <div className="home-wrapper ">
      <div className="circle-navigation-wrapper hidden md:flex flex-col">
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

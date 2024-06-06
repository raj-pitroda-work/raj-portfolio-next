"use client";
import RenderRedirectLink from "@/Components/Common/RenderRedirectLink";
import AboutBanner from "@/Components/Home/AboutBanner";
import ContactMe from "@/Components/Home/ContactMe";
import DevSkills from "@/Components/Home/DevSkills";
import MainBanner from "@/Components/Home/MainBanner";
import ProjectDetail from "@/Components/Home/ProjectDetail";
import { useLayoutEffect } from "react";
import Repo from "../repo/page";

export default function CreatePortfolio() {
  useLayoutEffect(() => {
    document.getElementsByTagName("body")[0].classList.add("config");

    return () => {
      document.getElementsByTagName("body")[0].classList.remove("config");
    };
  }, []);
  return (
    <div className="home-wrapper">
      <Repo />
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

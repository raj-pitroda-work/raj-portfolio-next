"use client";
import { Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeaderLinks = [
  { id: "MainBannerWrapperId", text: "Home" },
  { id: "AboutWrapperId", text: "About" },
  { id: "SkillWrapperId", text: "Skills" },
  { id: "ProjectWrapperId", text: "Projects" },
  { id: "ContactMeWrapperId", text: "Contact" },
];

const RenderRedirectLink: React.FC<{
  className?: string;
  hideText?: boolean;
}> = ({ className, hideText }) => {
  const [activeLink, setActiveLink] = useState("MainBannerWrapperId");
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollCalculation);
    return () => {
      window.removeEventListener("scroll", handleScrollCalculation);
    };
  }, []);

  const handleClick = (e: any, targetId: string) => {
    e.preventDefault();
    const targetElement: any = document.querySelector("#" + targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleScrollCalculation = () => {
    setShowLinks(false);
    HeaderLinks.forEach((section) => {
      const targetSection = document.getElementById(section.id);
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const elementTop = rect.top;
        const thresholdPosition = viewportHeight * 0.4;

        if (elementTop < thresholdPosition) {
          setActiveLink(section.id);
        }
      }
    });
  };

  return (
    <>
      {HeaderLinks.map((x) => (
        <Link
          href={`#${x.id}`}
          onClick={(e) => handleClick(e, x.id)}
          key={`header-link-${x.id}`}
          className={`link large-device-link ${
            activeLink === x.id ? "active" : ""
          } ${className ? className : ""}`}
        >
          {!hideText && x.text}
        </Link>
      ))}
      {!hideText && (
        <>
          <div
            className={`hamburger md:hidden ${showLinks ? "show" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Typography
            component={"div"}
            className={`mobile-menu-links md:hidden  ${
              showLinks ? "show" : ""
            }`}
          >
            {HeaderLinks.map((x, i) => (
              <Link
                href={`#${x.id}`}
                className={`link ${activeLink === x.id ? "active" : ""}`}
                key={`mobile-menu-${x.text}`}
                onClick={(e) => handleClick(e, x.id)}
              >
                {x.text}
              </Link>
            ))}
          </Typography>
        </>
      )}
    </>
  );
};

export default RenderRedirectLink;

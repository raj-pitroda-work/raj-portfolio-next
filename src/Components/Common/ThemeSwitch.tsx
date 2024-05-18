import { THEME_COLOR } from "@/utils/Constant";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

const ThemeSwitch = () => {
  const [isLight, setIsLight] = useState(true);

  const handleThemeChange = () => {
    const root = document.documentElement;
    document.body.classList.toggle("dark-theme");
    if (isLight) {
      Object.keys(THEME_COLOR.dark).forEach((key) => {
        root.style.setProperty("--" + key, THEME_COLOR.dark[key]);
      });
    } else {
      Object.keys(THEME_COLOR.light).forEach((key) => {
        root.style.setProperty("--" + key, THEME_COLOR.light[key]);
      });
    }
    setIsLight(!isLight);
  };

  return (
    <Tooltip title="Toggle Theme">
      <div
        className={`theme-switch-wrapper ${
          isLight ? "light" : "dark"
        } relative`}
      >
        <label className="switch">
          <input
            type="checkbox"
            checked={isLight}
            onChange={() => {
              handleThemeChange();
            }}
          />
          <span className="slider flex justify-between">
            <BsFillMoonStarsFill
              className={`h-full icn ml-1 xs:mt-0.5 md:mt-[1px] text-gray-600 ${
                isLight ? "opacity-100" : "opacity-0"
              }`}
              fontSize={17}
            />
            <IoMdSunny
              className={`h-full icn mr-1 c-theme ${
                isLight ? "opacity-0" : "opacity-100"
              }`}
              fontSize={22}
            />
          </span>
        </label>
      </div>
    </Tooltip>
  );
};

export default ThemeSwitch;

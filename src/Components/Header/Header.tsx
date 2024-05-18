"use client";
import { PROFILE_DETAIL } from "@/utils/Constant";
import { Avatar } from "@mui/material";
import RenderRedirectLink from "../Common/RenderRedirectLink";
import ThemeSwitch from "../Common/ThemeSwitch";

const Header = () => {
  const userName = PROFILE_DETAIL.Name;
  const nameArr = userName?.split(" ");

  return (
    <>
      <div className="header-wrapper flex justify-between items-center fixed w-full px-4">
        <div className="flex items-center">
          <Avatar className="profile-avtar uppercase" src="/Me.jpeg">
            {`${nameArr?.at(0)?.charAt(0)}${userName?.at(1)?.charAt(0)}`}
          </Avatar>
          <span className="ml-3 text-2xl font-bold"> {userName}</span>
        </div>
        <div className="links">
          <div className="flex items-center xs:flex-row-reverse md:flex-row gap-2">
            <RenderRedirectLink />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import SocialHandlers from "../Home/SocialHandlers";
import { PROFILE_DETAIL } from "@/utils/Constant";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper h-full p-2 flex xs:flex-col md:flex-row items-center justify-between text-gray-200">
        <div className="xs:my-1">
          <SocialHandlers
            icnClass="md:text-md xs:text-xl mx-1"
            hideLbl={true}
          />
        </div>
        <div className="text-center">
          <p className="md:text-sm xs:text-sm ">
            Developed By: {PROFILE_DETAIL.Name}
          </p>
          <p className="xs:text-sm md:text-sm ">
            ©2024 Copyright all rights reserved
          </p>
        </div>
        <p className="mr-4 md:text-sm xs:text-sm xs:mt-0.5 md:mt-0">
          {PROFILE_DETAIL.UpdatedAt}
        </p>
      </div>
    </>
  );
};

export default Footer;

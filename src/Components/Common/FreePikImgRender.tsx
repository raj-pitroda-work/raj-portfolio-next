import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FreePikImgRender: React.FC<{
  src: string;
  height: number;
  width: number;
  textLeft?: boolean;
}> = ({ src, height, width, textLeft }) => {
  return (
    <div className="flex justify-center items-center relative">
      <Image
        loading="eager"
        priority
        src={src}
        alt="Example Image"
        height={height}
        width={width}
        className={"object-cover"}
      />
      <Typography
        component={"a"}
        href="www.freepik.com"
        fontSize={9}
        className={`text-gray-400 hover:opacity-70 text-end absolute bottom-0 ${
          textLeft ? "left-2" : "right-2"
        }`}
      >
        Designed By Freepik
      </Typography>
    </div>
  );
};

export default FreePikImgRender;

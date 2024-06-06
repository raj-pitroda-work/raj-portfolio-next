import { CircularProgress } from "@mui/material";
import React from "react";

const CustomBtn: React.FC<{
  btnName: string | JSX.Element;
  className?: string;
  variant?: "outlined" | "contained";
  type?: "button" | "submit";
  isLoading?: boolean;
  onClick?: () => void;
}> = ({ btnName, className, variant, onClick, type, isLoading }) => {
  return (
    <span className="relative z-0 inline-block h-full w-auto">
      <button
        type={type ? type : "button"}
        className={`custom-btn text-sm flex items-center gap-2  ${
          variant ? variant : "outlined"
        }  ${
          isLoading ? "opacity-80 pointer-events-none cursor-not-allowed" : ""
        }  ${className ? className : ""}`}
        onClick={onClick}
        disabled={isLoading ? true : false}
      >
        {btnName}
        {isLoading && <CircularProgress size={15} className="btn-loader" />}
      </button>
    </span>
  );
};

export default CustomBtn;

import React from "react";

const CustomBtn: React.FC<{
  btnName: string;
  className?: string;
  variant?: "outlined" | "contained";
  type?: "button" | "submit";
  onClick?: () => void;
}> = ({ btnName, className, variant, onClick, type }) => {
  return (
    <div className="relative z-0">
      <button
        type={type ? type : "button"}
        className={`custom-btn text-sm ${variant ? variant : "outlined"}  ${
          className ? className : ""
        }`}
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default CustomBtn;

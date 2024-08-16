import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { GetUserContextValue, PROF_DETAIL_KEY } from "./EditContextWrapper";

const EditComp: React.FC<{
  name: PROF_DETAIL_KEY;
  children?: any;
  subKey?: string;
  index?: number;
  onClick?: () => void;
}> = ({ name, children, index, subKey, onClick }) => {
  const { setSelectedKey } = GetUserContextValue();

  return (
    <>
      {/* <span
        className="relative items-center edit-text inline-block w-auto"
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) {
            onClick();
          } else {
            setSelectedKey(name, e.currentTarget, index, subKey);
          }
        }}
      >
        <span className="edit-section-wrapper">{children}</span>
        <FaPencilAlt
          fontSize={16}
          className="icn  absolute bottom-1 c-theme right-1"
          color="black"
        />
      </span> */}
      {children}
    </>
  );
};

export default EditComp;

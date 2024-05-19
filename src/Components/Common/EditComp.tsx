import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { GetUserContextValue } from "./EditContextWrapper";

const EditComp: React.FC<{
  name:
    | "FullName"
    | "Name"
    | "Role"
    | "MobileNo"
    | "MobileNoForView"
    | "Email1"
    | "Email2"
    | "LinkedIn"
    | "WhatsAppNo"
    | "Experience"
    | "ShortBio"
    | "ResumeLink"
    | "UpdatedAt";
  children?: any;
}> = ({ name, children }) => {
  const { setSelectedKey } = GetUserContextValue();
  return (
    <>
      <span
        className="relative items-center edit-text inline-block w-auto"
        onClick={() => {
          setSelectedKey(name);
        }}
      >
        <span style={{ pointerEvents: "none" }}>{children}</span>
        <FaPencilAlt
          fontSize={18}
          className="ml-2 icn  absolute -right-6 bottom-4 c-theme"
          color="black"
        />
      </span>
    </>
  );
};

export default EditComp;

"use client";
import { PROFILE_DETAIL } from "@/utils/Constant";
import React, { createContext, useContext, useState } from "react";
import { IconType } from "react-icons";
import EditComp2 from "./EditComp2";

export const EditContext = createContext<{
  FullName: string;
  Name: string;
  Role: string;
  MobileNo: string;
  MobileNoForView: string;
  Email1: string;
  Email2: string;
  LinkedIn: string;
  WhatsAppNo: string;
  Experience: string;
  ShortBio: string;
  UpdatedAt: string;
  ResumeLink: string;
  Skills: {
    name: string;
    experience: string;
    icon: IconType;
    icnColor: string;
  }[];
  Projects: { name: string; desc: string }[];
  setDetails: (keyName: string, value: string) => void;
  selectedKey:
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
    | "UpdatedAt"
    | "";
  setSelectedKey: (key: string) => void;
  saveVal: () => void;
}>({
  FullName: "",
  Name: "",
  Role: "",
  MobileNo: "",
  MobileNoForView: "",
  Email1: "",
  Email2: "",
  ResumeLink: "",
  LinkedIn: "",
  WhatsAppNo: "",
  Experience: "",
  ShortBio: "",
  UpdatedAt: "",
  Skills: [],
  Projects: [],
  setDetails: (name, value) => {},
  selectedKey: "",
  setSelectedKey: (key) => {},
  saveVal: () => {},
});
const EditContextWrapper: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [details, setDetails] = useState(PROFILE_DETAIL);
  const [selectedKey, setSelectedKey] = useState("");

  const saveVal = () => {
    setSelectedKey("");
    sessionStorage.setItem("__prof_detail", JSON.stringify(details));
  };
  return (
    <EditContext.Provider
      value={{
        ...details,
        setDetails: (keyName, value) => {
          setDetails({ ...details, [keyName]: value });
        },
        saveVal: saveVal,
        selectedKey: selectedKey,
        setSelectedKey: (key: string) => {
          setSelectedKey(key);
          document
            .getElementsByTagName("body")[0]
            .classList.toggle("overflow-hidden");
        },
      }}
    >
      <div className={selectedKey ? "open-sidebar" : ""}>{children}</div>
      <EditComp2 />
    </EditContext.Provider>
  );
};

export default EditContextWrapper;

export const GetUserContextValue = () => {
  const contextVal = useContext(EditContext);
  return contextVal;
};

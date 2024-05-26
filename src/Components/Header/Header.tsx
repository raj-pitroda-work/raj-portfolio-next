"use client";
import { Avatar } from "@mui/material";
import RenderRedirectLink from "../Common/RenderRedirectLink";
import ThemeSwitch from "../Common/ThemeSwitch";
import { GetUserContextValue } from "../Common/EditContextWrapper";
import EditComp from "../Common/EditComp";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const { Name: userName, setDetails } = GetUserContextValue();
  const nameArr = userName?.split(" ");

  const handleEditClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const isValidFile = (file: File) => {
    const fileExt = file.name?.split(".")?.pop() as string;
    let error: string = "";
    if (["png", "jpg", "jpeg"].includes(fileExt.toLowerCase())) {
      const maxSize = 2 * 1024 * 1024;
      if (file.size >= maxSize) {
        error = "File size must me less than equal 2 MB.";
      }
    } else {
      error = "Only jpg, jpeg and png file allowed.";
    }
    if (error) {
      toast.error(error);
      return false;
    } else {
      return true;
    }
  };
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && isValidFile(file)) {
      setProfileImg(file);
      toast.success("Profile Image updated successfully.");

      const reader = new FileReader();
      let fileDetail = {};
      reader.onload = function (event: any) {
        const fileData = event.target.result;
        fileDetail = { name: file.name, data: fileData };
        setDetails("ProfImg", JSON.stringify(fileDetail));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="header-wrapper flex justify-between items-center fixed w-full px-4">
        <div className="flex items-center">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileInputChange}
          />
          <EditComp name="ProfImg" onClick={() => handleEditClick()}>
            <Avatar
              className="profile-avtar uppercase"
              src={profileImg ? URL.createObjectURL(profileImg) : "/Me.jpeg"}
            >
              {`${nameArr?.at(0)?.charAt(0)}${userName?.at(1)?.charAt(0)}`}
            </Avatar>
          </EditComp>
          <span className="ml-3 text-2xl font-bold">
            <EditComp name="Name"> {userName}</EditComp>
          </span>
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

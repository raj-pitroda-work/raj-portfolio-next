"use client";
import CustomBtn from "@/Components/Common/CustomBtn";
import { userService } from "@/services/userService";
import { Tooltip } from "@mui/material";
import { saveAs } from "file-saver";
import { useState } from "react";
import { BiDownload } from "react-icons/bi";

const Repo = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDownload = async () => {
    setIsLoading(true);
    const response: any = await userService.downloadRepo(
      JSON.parse(sessionStorage.getItem("__prof_detail") || "{}")
    );
    setIsLoading(false);
    saveAs(response, "files.zip");
  };

  return (
    <Tooltip title="Download Your Portfolio" placement="left">
      <div className="fixed bottom-12 right-5 z-50">
        <CustomBtn
          isLoading={isLoading}
          variant="contained"
          onClick={handleDownload}
          btnName={
            <>
              <BiDownload size={20} />
            </>
          }
        />
      </div>
    </Tooltip>
  );
};

export default Repo;

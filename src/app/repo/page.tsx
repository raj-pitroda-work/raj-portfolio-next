"use client";
import CustomBtn from "@/Components/Common/CustomBtn";
import { userService } from "@/services/userService";
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
    <div className="fixed bottom-10 right-5">
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
  );
};

export default Repo;

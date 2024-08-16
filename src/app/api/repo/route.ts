import { ProfileDetail } from "@/services/userServiceType";
import JSZip from "jszip";
import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

const handleDownload = async (newProfDetail: any) => {
  try {
    const arrayBuffer = await downloadRepo();
    const zip = await unzipRepo(arrayBuffer);
    const profileJsonFile = zip.file(
      "raj-portfolio-next-main/public/profile-detail.json"
    );
    const constJsonFile: any = zip.file(
      "raj-portfolio-next-main/src/utils/Constant.ts"
    );

    if (profileJsonFile) {
      let data = await profileJsonFile.async("string");
      const data2 = await constJsonFile.async("text");
      const dataArr1 = data2.split("//prof detail start");
      const dataArr2 = dataArr1.pop()?.split("//prof detail end");
      let jsonData = JSON.parse(data);

      for (const key in newProfDetail) {
        if (newProfDetail.hasOwnProperty(key)) {
          jsonData[key] = newProfDetail[key];
        }
      }
      const updatedJsonData = JSON.stringify(jsonData, null, 2);
      zip.file(
        "raj-portfolio-next-main/public/profile-detail.json",
        updatedJsonData
      );
    }

    const modifiedBlob = await zipRepo(zip);
    return modifiedBlob;
  } catch (error) {
    console.error("error");
  }
};

const downloadRepo = async () => {
  const url = `https://github.com/raj-pitroda-work/raj-portfolio-next/archive/refs/heads/main.zip`;
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  return arrayBuffer;
};

const unzipRepo = async (arrayBuffer: ArrayBuffer) => {
  const zip = await JSZip.loadAsync(arrayBuffer);
  return zip;
};

const zipRepo = async (zip: any) => {
  const content = await zip.generateAsync({ type: "blob" });
  return content;
};

export const POST = async (req: NextRequest) => {
  const newProfDetail: ProfileDetail = await req.json();
  const abcd = await handleDownload(newProfDetail);
  const zipStream = abcd.stream();

  // Create headers for the response
  const headers = new Headers();
  headers.append("Content-Type", "application/zip");
  headers.append("Content-Disposition", 'attachment; filename="files.zip"');

  // Return the response with the ZIP file stream
  return new NextResponse(zipStream, {
    status: 200,
    headers: headers,
  });
};

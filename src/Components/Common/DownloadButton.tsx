import React from "react";

const DownloadButton = () => {
  return (
    <div className="button" data-tooltip="Size: 20Mb">
      <div className="button-wrapper">
        <div className="text">Download</div>
        <span className="icon">icn</span>
      </div>
    </div>
  );
};

export default DownloadButton;

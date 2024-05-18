import React from "react";

const CubeLoader = () => {
  return (
    <div className="cube-loader-wrapper">
      <div className="cube-loader">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          {/* <span className="cube-span" style={{ "--i": 0 }}></span>
          <span className="cube-span" style={{ "--i": 1 }}></span>
          <span className="cube-span" style={{ "--i": 2 }}></span>
          <span className="cube-span" style={{ "--i": 3 }}></span> */}
        </div>
      </div>
    </div>
  );
};

export default CubeLoader;

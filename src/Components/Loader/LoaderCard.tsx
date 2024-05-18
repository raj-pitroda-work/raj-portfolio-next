import React from "react";

const LoaderCard: React.FC<{ children: React.JSX.Element; name: String }> = (
  props
) => {
  const { children, name } = props;
  return (
    <div className="loader-card-wrapper">
      <div className="loader-card">
        <div className="profileImage">{children}</div>
        <hr className="w-full" />
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

export default LoaderCard;

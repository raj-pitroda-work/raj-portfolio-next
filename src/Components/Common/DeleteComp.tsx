import React from "react";
import { GetUserContextValue, PROF_DETAIL_KEY } from "./EditContextWrapper";
import { BsTrash3Fill } from "react-icons/bs";

const DeleteComp: React.FC<{
  name: PROF_DETAIL_KEY;
  children?: any;
  index: number;
  isDeleteAllowed: boolean;
}> = ({ name, children, index, isDeleteAllowed = true }) => {
  const { removeDetails } = GetUserContextValue();

  return (
    <>
      <div className="relative items-center delete-section-wrapper inline-block w-full">
        <span>{children}</span>
        {isDeleteAllowed && (
          <BsTrash3Fill
            fontSize={24}
            className="delete-icn absolute right-0 top-0 c-theme p-1 cursor-pointer"
            color="black"
            onClick={(e) => {
              removeDetails(name, index);
            }}
          />
        )}
      </div>
    </>
  );
};

export default DeleteComp;

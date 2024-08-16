"use client";
import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import InputTextField from "./InputTextField";
import { GetUserContextValue } from "./EditContextWrapper";
import CustomBtn from "./CustomBtn";
import { Popover } from "@mui/material";

const UpdateMainDetail = () => {
  const userContext: any = GetUserContextValue();

  const initialValues: { default: string; new: string } = {
    default: "",
    new: "",
  };

  const [initValState, setInitValState] = useState(initialValues);
  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const selectedKeyDetail = userContext.selectedKeyDetail;
    if (selectedKeyDetail.keyName) {
      if (selectedKeyDetail.index >= 0 && selectedKeyDetail.subKey) {
        setInitValState({
          default: userContext[selectedKeyDetail.keyName][
            selectedKeyDetail.index
          ][selectedKeyDetail.subKey] as string,
          new: "",
        });
      } else {
        setInitValState({
          default: userContext[selectedKeyDetail.keyName] as string,
          new: "",
        });
      }

      setAnchorEl(selectedKeyDetail.target);
    } else {
      setInitValState(initialValues);
      setAnchorEl(null);
    }
  }, [userContext.selectedKeyDetail.keyName]);

  const validationSchema = Yup.object().shape({
    new: Yup.string().required("This field is required"),
  });

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={() => {
        userContext.setSelectedKey("", null);
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div className={`h-auto w-96 ${initValState.default ? "active" : ""}`}>
        <Formik
          initialValues={initValState}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={() => {
            userContext.saveVal();
          }}
        >
          {({ handleSubmit, resetForm }) => (
            <form onSubmit={handleSubmit} className=" form-wrapper h-full">
              <div className="p-4 ">
                <InputTextField
                  name="default"
                  lbl="Default Value"
                  setValue={(val: string) =>
                    userContext.setDetails(
                      userContext.selectedKeyDetail.keyName,
                      val
                    )
                  }
                  disabled
                />
                <InputTextField
                  name="new"
                  lbl="New Value"
                  setValue={(val: string) =>
                    userContext.setDetails(
                      userContext.selectedKeyDetail.keyName,
                      val ? val : initValState.default
                    )
                  }
                />
              </div>
              <div className="dialog-footer flex gap-4 w-full justify-end p-2">
                <CustomBtn
                  type="submit"
                  btnName="Save"
                  className="opacity-90"
                  variant="contained"
                />
                <CustomBtn
                  btnName="Cancel"
                  onClick={() => {
                    resetForm();
                    userContext.setSelectedKey("", null);
                    userContext.setDetails(
                      userContext.selectedKeyDetail.keyName,
                      initValState.default
                    );
                  }}
                  className="opacity-90"
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Popover>
  );
};

export default UpdateMainDetail;

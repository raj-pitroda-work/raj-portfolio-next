"use client";
import { Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import InputTextField from "./InputTextField";
import { GetUserContextValue } from "./EditContextWrapper";
import CustomBtn from "./CustomBtn";

const EditComp2 = () => {
  const userContext = GetUserContextValue();

  const initialValues: { default: string; new: string } = {
    default: "",
    new: "",
  };

  const [initValState, setInitValState] = useState(initialValues);

  useEffect(() => {
    if (userContext.selectedKey) {
      setInitValState({
        default: userContext[userContext.selectedKey] as string,
        new: "",
      });
    } else {
      setInitValState(initialValues);
    }
  }, [userContext.selectedKey]);

  const validationSchema = Yup.object().shape({
    new: Yup.string().required("This field is required"),
  });

  return (
    <div
      className={`h-auto w-96 fixed top-1/4 right-0 p-1 rounded-xl edit-sidebar ${
        initValState.default ? "active" : ""
      }`}
    >
      <Formik
        initialValues={initValState}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={() => {
          userContext.saveVal();
        }}
      >
        {({ setFieldValue, values, handleSubmit, resetForm }) => (
          <form onSubmit={handleSubmit} className=" form-wrapper p-4 h-full">
            <InputTextField
              name="default"
              lbl="Default Value"
              setValue={(val: string) =>
                userContext.setDetails(userContext.selectedKey, val)
              }
              disabled
            />
            <InputTextField
              name="new"
              lbl="New Value"
              setValue={(val: string) =>
                userContext.setDetails(
                  userContext.selectedKey,
                  val ? val : initValState.default
                )
              }
            />
            <div className="flex gap-4 mt-6 ">
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
                  userContext.setSelectedKey("");
                  userContext.setDetails(
                    userContext.selectedKey,
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
  );
};

export default EditComp2;

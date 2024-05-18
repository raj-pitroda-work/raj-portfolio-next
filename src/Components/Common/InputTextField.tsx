import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

const InputTextField: React.FC<{
  name: string;
  lbl: string;
  noOfRows?: number;
  className?: string;
  wrapperClassName?: string;
  type?: React.InputHTMLAttributes<unknown>["type"];
}> = ({ lbl, noOfRows, className, wrapperClassName, name, type }) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  return (
    <>
      <div
        className={`my-3 w-full ${wrapperClassName ? wrapperClassName : ""}`}
      >
        <TextField
          type={type ? type : "text"}
          name={name}
          label={lbl}
          size="small"
          variant="outlined"
          className={`w-full ${className}`}
          multiline={Number(noOfRows) > 1}
          rows={Number(noOfRows ?? 1)}
          value={field.value}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
          onBlur={(e) => {
            setFieldValue(name, e.target.value?.trim(), true);
            setFieldTouched(name, true, true);
          }}
          error={meta.error && meta.touched ? true : false}
          helperText={meta.error && meta.touched ? meta.error : ""}
        />
      </div>
    </>
  );
};

export default InputTextField;

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
  setValue?: (val: string) => void;
  disabled?: boolean;
}> = ({
  lbl,
  noOfRows,
  className,
  wrapperClassName,
  name,
  type,
  setValue,
  disabled,
}) => {
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
          disabled={disabled}
          variant="outlined"
          className={`w-full ${className}`}
          multiline={type ? false : true}
          rows={noOfRows ? Number(noOfRows) : undefined}
          maxRows={Number(noOfRows) ? undefined : 10}
          value={field.value}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
            if (setValue) {
              setValue(e.target.value);
            }
          }}
          onBlur={(e) => {
            setFieldValue(name, e.target.value?.trim(), true);
            setFieldTouched(name, true, true);
            if (setValue) {
              setValue(e.target.value?.trim());
            }
          }}
          error={meta.error && meta.touched ? true : false}
          helperText={meta.error && meta.touched ? meta.error : ""}
        />
      </div>
    </>
  );
};

export default InputTextField;

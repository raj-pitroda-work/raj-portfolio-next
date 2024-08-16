import {
  Autocomplete,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Formik } from "formik";
import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import * as Yup from "yup";
import CustomBtn from "../Common/CustomBtn";
import { GetUserContextValue } from "../Common/EditContextWrapper";
import InputTextField from "../Common/InputTextField";
import AllIcnSearch from "../Common/AllIcnSearch";
import { IconType } from "react-icons";

const EXP_OPTIONS = [
  { value: "Years", label: "Years" },
  { value: "Months", label: "Months" },
  { value: "Days", label: "Days" },
];

type TSkill = {
  name: string;
  expNo: string;
  expIn: { value: string; label: string };
};

export type TSelectedIcnDetail = {
  index: number | null;
  icon: IconType | null;
};
const AddSkillModal: React.FC<{ isOpen: boolean; handleClose: () => void }> = ({
  isOpen,
  handleClose,
}) => {
  const [selectedIcn, setSelectedIcn] = useState<TSelectedIcnDetail>({
    index: null,
    icon: null,
  });
  const { setDetails, Skills, saveVal } = GetUserContextValue();
  const initValState: TSkill = {
    name: "",
    expNo: "",
    expIn: EXP_OPTIONS[0],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    expNo: Yup.number()
      .required("This field is required")
      .min(0, "Negative not allowed"),
  });

  const onSave = (values: TSkill) => {
    const exValues = [...Skills];
    const { expIn, expNo, name } = values;
    exValues.push({
      name,
      experience: `${expNo}+ ${expIn.label}`,
      icon: selectedIcn.icon as IconType,
      icnColor: "",
    });
    setDetails("Skills", exValues);
    saveVal();
    handleClose();
  };

  return (
    <Formik
      initialValues={initValState}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onSave}
    >
      {({ handleSubmit, setFieldValue, values }) => (
        <form onSubmit={handleSubmit} className="form-wrapper ">
          <Dialog
            open={isOpen}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            className="active p-0"
            maxWidth="xs"
          >
            <DialogTitle sx={{ p: 0, textAlign: "center", fontWeight: 600 }}>
              <Typography
                className="py-2 dialog-header font-semibold"
                component={"h4"}
              >
                Add Skill
              </Typography>
            </DialogTitle>
            <DialogContent className="p-0 text-center ">
              <div className="p-4 ">
                <InputTextField name="name" lbl="Skill Name" />
                <Grid container>
                  <Grid md={5.5} xs={12}>
                    <InputTextField
                      name="expNo"
                      lbl="Experience"
                      type="number"
                    />
                  </Grid>
                  <Grid md={1}></Grid>
                  <Grid md={5.5} xs={12}>
                    <Autocomplete
                      options={EXP_OPTIONS}
                      renderInput={(params) => <TextField {...params} />}
                      size="small"
                      onChange={(_, val) => setFieldValue("expIn", val)}
                      clearIcon={false}
                      value={values.expIn}
                      isOptionEqualToValue={(opt, val) =>
                        opt.value === val.value
                      }
                      className="my-3"
                      filterOptions={(options, state) => {
                        return options.filter((option) =>
                          `${option.label}`.includes(state.inputValue)
                        );
                      }}
                    />
                  </Grid>
                </Grid>
                <AllIcnSearch
                  setSelectedIcn={setSelectedIcn}
                  selectedIcn={selectedIcn}
                />
              </div>
            </DialogContent>
            <DialogActions className="dialog-footer">
              <CustomBtn
                type="submit"
                btnName="Add"
                onClick={handleSubmit}
                variant="contained"
              ></CustomBtn>
              <CustomBtn onClick={handleClose} btnName="Cancel"></CustomBtn>
            </DialogActions>
          </Dialog>
        </form>
      )}
    </Formik>
  );
};

export default AddSkillModal;

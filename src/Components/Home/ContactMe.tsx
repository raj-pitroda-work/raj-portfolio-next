"use client";
import { userService } from "@/services/userService";
import {
  Autocomplete,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CustomBtn from "../Common/CustomBtn";
import FreePikImgRender from "../Common/FreePikImgRender";
import InputTextField from "../Common/InputTextField";
import { useState } from "react";
import { CountryData, all } from "country-codes-list";
import OpacityAnimation from "../Common/Animations/OpacityAnimation";
import SlideAnimation from "../Common/Animations/SlideAnimation";
import { Formik } from "formik";
import * as Yup from "yup";
import { TSendEmailReq } from "@/services/userServiceType";
import { toast } from "react-toastify";

//to distinct
const CountryList = all().reduce((acc: any, country) => {
  const existingCountry = acc.find(
    (c: any) => c.countryCallingCode === country.countryCallingCode
  );
  if (!existingCountry) {
    acc.push({
      ...country,
      value: country.countryCallingCode,
      label: country.countryCallingCode,
    });
  }
  return acc;
}, []);

type TInitVal = {
  name: string;
  countryCode: CountryData;
  mobileNo: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const [isLoading, setLoading] = useState(false);

  const initialValues: TInitVal = {
    name: "",
    countryCode: CountryList.find((x: any) => x.countryCode === "IN"),
    mobileNo: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    mobileNo: Yup.string()
      .required("Mobile No is required.")
      .min(9, "Mobile No must be 9 to 14 dig long")
      .max(14, "Mobile No must be 9 to 14 dig long"),
    email: Yup.string()
      .email("Please enter a valid Email.")
      .required("Email is required."),
    subject: Yup.string().required("Subject is required."),
  });

  const handleSendMsg = (values: TInitVal) => {
    setLoading(true);
    const { countryCode, email, message, mobileNo, name, subject } = values;
    const payload: TSendEmailReq = {
      countryCode: "+" + countryCode.countryCallingCode,
      email,
      message,
      mobileNo,
      name,
      subject,
    };
    userService
      .sendEmail(payload)
      .then((res) => {
        if (res) {
          toast.success(res);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={handleSendMsg}
    >
      {({ setFieldValue, values, handleSubmit, resetForm }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            className="primary-bg contact-me-wrapper"
            id="ContactMeWrapperId"
          >
            <Grid item md={7} className="flex items-center  ">
              <SlideAnimation className="w-full" translate="right">
                <div className="form-wrapper p-6 md:w-3/5 md:ml-16">
                  <SlideAnimation translate="bottom" delay={0.2}>
                    <Typography
                      component={"h3"}
                      fontWeight={600}
                      className="c-theme-title mb-6"
                    >
                      Get In Touch
                    </Typography>
                  </SlideAnimation>
                  <SlideAnimation translate="bottom" delay={0.2}>
                    <InputTextField lbl="Name" name="name" />
                  </SlideAnimation>
                  <SlideAnimation translate="bottom" delay={0.2}>
                    <div className="flex">
                      <Autocomplete
                        options={CountryList}
                        getOptionLabel={(option) =>
                          `+${option.countryCallingCode}`
                        }
                        isOptionEqualToValue={(opt: any, val: any) => {
                          return opt.value === val.value;
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className="mobile-code-select"
                          />
                        )}
                        filterOptions={(options, state) => {
                          return options.filter((option) =>
                            `${option.countryCallingCode}`.includes(
                              state.inputValue
                            )
                          );
                        }}
                        size="small"
                        onChange={(_, val) => setFieldValue("countryCode", val)}
                        clearIcon={false}
                        value={values.countryCode}
                        className="border-right-0"
                      />
                      <InputTextField
                        type="number"
                        lbl="Mobile No"
                        className="border-left-0"
                        wrapperClassName="my-0"
                        name="mobileNo"
                      />
                    </div>
                  </SlideAnimation>
                  <SlideAnimation translate="bottom" delay={0.2}>
                    <InputTextField lbl="Email" name="email" />
                  </SlideAnimation>
                  <SlideAnimation translate="bottom" delay={0.2}>
                    <InputTextField lbl="Subject" name="subject" />
                  </SlideAnimation>
                  <SlideAnimation translate="bottom" delay={0.2}>
                    <InputTextField lbl="Message" name="message" noOfRows={5} />
                  </SlideAnimation>
                  <SlideAnimation translate="bottom" delay={0.2}>
                    <div className="flex gap-4 mt-6">
                      <CustomBtn
                        isLoading={isLoading}
                        type="submit"
                        btnName="Send Message"
                        className="opacity-90"
                        variant="contained"
                      />
                      <CustomBtn
                        btnName="Clear"
                        onClick={resetForm}
                        className="opacity-90"
                      />
                    </div>
                  </SlideAnimation>
                </div>
              </SlideAnimation>
            </Grid>
            <Grid
              item
              md={5}
              className="flex items-center w-full justify-center"
            >
              <OpacityAnimation>
                <FreePikImgRender
                  src={"/ContactBan.svg"}
                  height={600}
                  width={600}
                />
              </OpacityAnimation>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default ContactMe;

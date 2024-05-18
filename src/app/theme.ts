"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 641,
  //       md: 769,
  //       lg: 1025,
  //       xl: 1281,
  //     },
  //   },
});

export default theme;

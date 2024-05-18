"use client";
import { Typography } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const SectionName: React.FC<{ name: string }> = ({ name }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animate = useAnimation();

  useEffect(() => {
    if (isInView) {
      animate.start("step2");
    }
  }, [isInView]);

  return (
    <Typography
      component={"div"}
      overflow={"hidden"}
      className="flex justify-center items-center"
      ref={ref}
    >
      <motion.hr
        initial="step1"
        animate={animate}
        variants={{
          step1: { opacity: 0, x: -100 },
          step2: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="w-full"
      ></motion.hr>
      <motion.h2
        initial="step1"
        animate={animate}
        variants={{
          step1: { opacity: 0 },
          step2: { opacity: 1 },
        }}
        transition={{ duration: 1 }}
        className="ml-4 mr-4 text-5xl"
      >
        {name}
      </motion.h2>
      <motion.hr
        initial="step1"
        animate={animate}
        variants={{
          step1: { opacity: 0, x: 100 },
          step2: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="w-full"
      ></motion.hr>
    </Typography>
  );
};

export default SectionName;

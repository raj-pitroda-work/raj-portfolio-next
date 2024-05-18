import React from "react";
import "./loader.scss";
import { LOADER_TYPE_ENUM } from "@/utils/Constant";
import CubeLoader from "./CubeLoader";
import TypingDotsLoader from "./TypingDotsLoader";
import LoaderCard from "./LoaderCard";
import SpinnerLoader from "./SpinnerLoader";
import CircleLoader from "./CircleLoader";
import StepperLoader from "./StepperLoader";
import SquareBounceLoader from "./SquareBounceLoader";

const LOADER_ARRAY = [
  {
    name: LOADER_TYPE_ENUM.Cube,
    component: <CubeLoader />,
  },
  {
    name: LOADER_TYPE_ENUM.TypingDots,
    component: <TypingDotsLoader />,
  },
  {
    name: LOADER_TYPE_ENUM.Spinner,
    component: <SpinnerLoader />,
  },
  {
    name: LOADER_TYPE_ENUM.Circle,
    component: <CircleLoader />,
  },
  {
    name: LOADER_TYPE_ENUM.Stepper,
    component: <StepperLoader />,
  },
  {
    name: LOADER_TYPE_ENUM.SquareBounce,
    component: <SquareBounceLoader />,
  },
];

const LoaderSelection = () => {
  return (
    <div className="loader-container">
      <div className="flex gap-12">
        {LOADER_ARRAY.map((x) => (
          <LoaderCard key={`loader-card-${x.name}`} name={x.name}>
            {x.component}
          </LoaderCard>
        ))}
      </div>
    </div>
  );
};

export default LoaderSelection;

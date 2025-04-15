"use client";

// // import { motion } from "motion/react";
import { LoginSectionEmail, LoginSectionPassword } from "./LoginSection";
import { useState } from "react";

export const Signup = () => {
  const [stepCount, setStepCount] = useState(0);

  const handleNextStep = () => {
    if (stepCount < 2) {
      return setStepCount(stepCount + 1);
    }
  };

  const handlePreviousStep = () => {
    if (stepCount > 1) {
      return setStepCount(stepCount - 1);
    }
  };

  const signUpStep = [
    <LoginSectionEmail
      onClick={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />,
    <LoginSectionPassword />,
  ][stepCount];

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      {signUpStep}
    </div>
  );
};

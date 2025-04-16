"use client";

import { useRouter } from "next/navigation";
// // import { motion } from "motion/react";
import { LoginSectionEmail, LoginSectionPassword } from "./LoginSection";
import { useRef, useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [stepCount, setStepCount] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleNextStep = () => {
    if (stepCount < 2) {
      return setStepCount(stepCount + 1);
    }
  };

  const handlePreviousStep = () => {
    if (stepCount >= 1) {
      return setStepCount(stepCount - 1);
    }
  };

  const handleAlreadyHaveAccount = () => {
    router.push("/login");
  };

  const signUpStep = [
    <LoginSectionEmail
      inputRef={inputRef}
      onClick={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleAlreadyHaveAccount={handleAlreadyHaveAccount}
    />,
    <LoginSectionPassword
      inputRef={inputRef}
      handlePreviousStep={handlePreviousStep}
      handleAlreadyHaveAccount={handleAlreadyHaveAccount}
    />,
  ][stepCount];

  return <div className="flex ">{signUpStep}</div>;
};

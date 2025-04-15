"use client";

import { motion } from "motion/react";
import { LoginSectionEmail, LoginSectionPassword } from "./LoginSection";
import { useState } from "react";

export const Signup = () => {
  const [stepCount, setStepCount] = useState(0);
  const signUpStep = [<LoginSectionEmail />, <LoginSectionPassword />][0];
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <motion.div
        key={stepCount}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex w-screen h-screen items-center justify-center"
      >
        {signUpStep}
      </motion.div>
    </div>
  );
};

"use client";

import { useRouter } from "next/navigation";
import { LoginSectionEmail, LoginSectionPassword } from "./LoginSection";
import { useState } from "react";

export const Signup = () => {
  const [stepCount, setStepCount] = useState(0);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleNextStep = (userEmail: string) => {
    setEmail(userEmail);
    setStepCount(1);
  };

  const handlePreviousStep = () => {
    if (stepCount > 0) {
      setStepCount(stepCount - 1);
    }
  };

  const handleAlreadyHaveAccount = () => {
    router.push("/login");
  };

  const signUpSteps = [
    <LoginSectionEmail
      onNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleAlreadyHaveAccount={handleAlreadyHaveAccount}
    />,
    <LoginSectionPassword
      email={email}
      handlePreviousStep={handlePreviousStep}
      handleAlreadyHaveAccount={handleAlreadyHaveAccount}
    />,
  ];

  return <div className="flex w-full h-full">{signUpSteps[stepCount]}</div>;
};

export default Signup;

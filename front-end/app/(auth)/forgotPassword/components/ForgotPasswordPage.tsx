"use client";
import { useState } from "react";
import { CreateNewPassword } from "./CreateNewPassword";
import { ResetPassword } from "./ResetPassword";
import { VerifyEmail } from "./VerifyEmail";

export const ForgotPasswordPage = () => {
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    if (page >= 0 && page < 2) {
      setPage(page + 1);
    }
    console.log(page);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const ForgotPassWordArray = [
    <ResetPassword
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />,
    <VerifyEmail
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />,
    <CreateNewPassword handlePreviousPage={handlePreviousPage} />,
  ][page];

  return <div> {ForgotPassWordArray}</div>;
};

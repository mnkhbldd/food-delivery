"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import axios from "axios";

export const ResetPassword = ({
  handleNextPage,
  handlePreviousPage,
  emailInputRef,
}: {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  emailInputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const router = useRouter();

  const [emailError, setEmailError] = useState("");

  const checkEmailIsValid = async () => {
    const email = emailInputRef.current?.value;

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8000/user");

      console.log(response.data);

      const foundUser = response.data.users.find(
        (user: { email: string }) => user.email === email
      );

      if (foundUser) {
        setEmailError("");
        handleNextPage();
      } else {
        setEmailError("Email is not registered");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setEmailError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-around w-full h-full">
      <div className="flex flex-col gap-6 w-[288px]">
        <Button className="bg-white border text-black px-4 py-2 w-[36px]">
          <div onClick={handlePreviousPage} className="cursor-pointer">
            <ArrowLeft />
          </div>
        </Button>
        <div>
          <p className="text-[24px] font-semibold">Reset your password</p>
          <p className="text-[16px] text-[#71717A]">
            Enter your email to receive a password reset link.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Input
            ref={emailInputRef}
            name="email"
            placeholder="Enter your email address"
            type="email"
            className={`${emailError ? "border-red-500" : ""}`}
          />

          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <Button className="bg-black " onClick={checkEmailIsValid}>
          Send a link
        </Button>
        <p className="text-center text-[#71717A]">
          Dont have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-[#2563EB] cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

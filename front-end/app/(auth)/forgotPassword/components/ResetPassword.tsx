"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import axios from "axios";

export const ResetPassword = ({
  handleNextPage,
  handlePreviousPage,
}: {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}) => {
  const router = useRouter();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const checkEmailIsValid = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user");
      if (emailInputRef.current?.value == response.data.email) {
        return response.data.email;
      }
      
    } catch (error) {}
  };


  return (
    <div className="flex items-center justify-around w-full h-full">
      <div className="flex flex-col gap-6 w-[288px]">
        <Button className="bg-white border text-black px-4 py-2 w-[36px]">
          <div onClick={handlePreviousPage}>
            {" "}
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
          />

          <span className="text-red-500 text-sm"></span>
        </div>
        <Button className="bg-black " onClick={handleNextPage}>
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

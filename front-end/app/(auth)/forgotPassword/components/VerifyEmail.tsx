"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useRouter } from "next/navigation";

export const VerifyEmail = ({
  handleNextPage,
  handlePreviousPage,
  emailInputRef,
}: {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  emailInputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const router = useRouter();
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
          <p className="text-[24px] font-semibold">Please verify your email</p>
          <p className="text-[16px] text-[#71717A]">
            We just sent an email to {emailInputRef.current?.value} Click the
            link in the email to verify your account.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Input
            ref={emailInputRef}
            defaultValue={emailInputRef.current?.value}
            name="email"
            placeholder="Enter your email address"
            type="email"
            className=""
          />

          <span className="text-red-500 text-sm"></span>
        </div>
        <Button className="bg-black" onClick={handleNextPage}>
          Resend email
        </Button>
      </div>
    </div>
  );
};

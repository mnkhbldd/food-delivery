import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const LoginSection = () => {
  return (
    <div className="flex flex-col gap-6 w-[288px]">
      <Button className="bg-white border text-black px-4 py-2 w-[36px]">
        <ArrowLeft />
      </Button>
      <div>
        <p className="text-[24px] font-semibold">Create your account</p>
        <p className="text-[16px] text-[#71717A]">
          Sign up to explore your favorite dishes.
        </p>
      </div>

      <Input placeholder="Enter your email address" />
      <Button className="bg-gray-400">Let's Go</Button>
      <p className="text-center text-[#71717A]">
        Already have an account? <span className="text-[#2563EB]">Log in</span>
      </p>
    </div>
  );
};

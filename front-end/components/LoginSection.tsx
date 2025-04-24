"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type InputTypes = {
  onClick: () => void;
  handlePreviousStep: () => void;
  handleAlreadyHaveAccount: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
};

export const LoginSectionEmail = ({
  onClick,
  handlePreviousStep,
  handleAlreadyHaveAccount,
  inputRef,
}: {
  onClick: () => void;
  handlePreviousStep: () => void;
  handleAlreadyHaveAccount: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  return (
    <div className="flex items-center justify-around w-full h-full">
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

        <Input
          ref={inputRef}
          name="gmail"
          placeholder="Enter your email address"
        />
        <Button onClick={onClick} className="bg-gray-400">
          Let's Go
        </Button>
        <p className="text-center text-[#71717A]">
          Already have an account?{" "}
          <span
            onClick={handleAlreadyHaveAccount}
            className="text-[#2563EB] cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export const LoginSectionPassword = ({
  handlePreviousStep,
  handleAlreadyHaveAccount,
  inputRef,
}: {
  handlePreviousStep: () => void;
  handleAlreadyHaveAccount: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  return (
    <div className="flex items-center justify-around w-full h-full">
      <div className="flex flex-col gap-6 w-[288px]">
        <Button
          className="bg-white border text-black px-4 py-2 w-[36px]"
          onClick={handlePreviousStep}
        >
          <ArrowLeft />
        </Button>
        <div>
          <p className="text-[24px] font-semibold">Create a strong password</p>
          <p className="text-[16px] text-[#71717A]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <Input
          ref={inputRef}
          name="password"
          placeholder="Password"
          type="password"
        />
        <Input
          ref={inputRef}
          name="confirmpassword"
          placeholder="Confirm"
          type="password"
        />
        <div className="flex gap-2 items-center">
          <Checkbox id="terms2" disabled className="border-[#71717A]" />
          <label htmlFor="terms2" className="text-[#71717A]">
            Show password
          </label>
        </div>
        <Button className="bg-gray-400">Let's Go</Button>
        <p className="text-center text-[#71717A]">
          Already have an account?{" "}
          <span
            className="text-[#2563EB] cursor-pointer"
            onClick={handleAlreadyHaveAccount}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export const LoginSectionLogin = () => {
  const router = useRouter();
  const passwordRefLogin = useRef<HTMLInputElement>(null);
  const emailRefLogin = useRef<HTMLInputElement>(null);

  const [error, setError] = useState({ email: false, password: false });
  const [loginError, setLoginError] = useState("");

  const handleSignUp = () => {
    router.push("/signup");
  };

  const handleOnLogin = async () => {
    const email = emailRefLogin.current?.value;
    const password = passwordRefLogin.current?.value;

    const isEmailEmpty = !email;
    const isPasswordEmpty = !password;

    setError({
      email: isEmailEmpty,
      password: isPasswordEmpty,
    });

    setLoginError("");

    if (isEmailEmpty || isPasswordEmpty) return;

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      router.push("/");
      console.log(response);
    } catch (err: any) {
      if (err.response?.status === 401) {
        setLoginError("Email or password is not correct");
      } else {
        setLoginError("Please check email and password.");
      }
    }
  };

  return (
    <div className="flex items-center justify-around w-full h-full">
      <div className="flex flex-col gap-6 w-[288px]">
        <Button className="bg-white border text-black px-4 py-2 w-[36px]">
          <ArrowLeft />
        </Button>
        <div>
          <p className="text-[24px] font-semibold">Log in</p>
          <p className="text-[16px] text-[#71717A]">
            Log in enjoy your favorite dishes.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <Input
            ref={emailRefLogin}
            name="email"
            placeholder="Enter your email address"
            type="email"
            className={error.email ? "border-red-500" : ""}
          />
          {error.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Input
            ref={passwordRefLogin}
            name="password"
            placeholder="Password"
            type="password"
            className={error.password ? "border-red-500" : ""}
          />
          {error.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}
        </div>

        {loginError && (
          <span className="text-red-500 text-sm text-center">{loginError}</span>
        )}

        <a className="underline">Forgot password ?</a>

        <Button onClick={handleOnLogin} className="bg-gray-400">
          Let's Go
        </Button>

        <p className="text-center text-[#71717A]">
          Don't have an accout?{" "}
          <span
            className="text-[#2563EB] cursor-pointer"
            onClick={handleSignUp}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

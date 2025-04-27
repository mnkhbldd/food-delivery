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
  onNextStep,
  handlePreviousStep,
  handleAlreadyHaveAccount,
}: {
  onNextStep: (email: string) => void;
  handlePreviousStep: () => void;
  handleAlreadyHaveAccount: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleNext = () => {
    const email = inputRef.current?.value?.trim();

    if (!email || !validateEmail(email)) {
      setEmailError("Email is required and must be valid");
      return;
    }

    setEmailError("");
    onNextStep(email);
  };

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
          <p className="text-[24px] font-semibold">Create your account</p>
          <p className="text-[16px] text-[#71717A]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Input
            ref={inputRef}
            name="email"
            placeholder="Enter your email address"
            type="email"
            className={emailError ? "border-red-500" : ""}
          />
          {emailError && (
            <span className="text-red-500 text-sm">{emailError}</span>
          )}
        </div>
        <Button onClick={handleNext} className="bg-gray-400">
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
  email,
  handlePreviousStep,
  handleAlreadyHaveAccount,
}: {
  email: string;
  handlePreviousStep: () => void;
  handleAlreadyHaveAccount: () => void;
}) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [error, setError] = useState({
    password: false,
    confirmPassword: false,
  });
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = async () => {
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    const isPasswordEmpty = !password;
    const isConfirmPasswordEmpty = !confirmPassword;
    const doPasswordsMatch = password === confirmPassword;

    setError({
      password: isPasswordEmpty,
      confirmPassword: isConfirmPasswordEmpty || !doPasswordsMatch,
    });

    if (isPasswordEmpty || isConfirmPasswordEmpty || !doPasswordsMatch) {
      if (!doPasswordsMatch && password && confirmPassword) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("Password and Confirm Password are required");
      }
      return;
    }

    try {
      await axios.post("http://localhost:8000/user", {
        email,
        password,
      });
      router.push("/");
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 405) {
        setPasswordError("Email already exists.");
      } else {
        setPasswordError("Failed to create account. Please try again.");
      }
    }
  };

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
            Create a strong password with letters and numbers.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Input
            ref={passwordRef}
            name="password"
            placeholder="Password"
            type="password"
            className={error.password ? "border-red-500" : ""}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Input
            ref={confirmPasswordRef}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            className={error.confirmPassword ? "border-red-500" : ""}
          />
        </div>
        {passwordError && (
          <span className="text-red-500 text-sm">{passwordError}</span>
        )}
        <Button onClick={handleSignup} className="bg-gray-400">
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

"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useRef } from "react";

type InputTypes = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleOnClick: any;
  handleInputChange: any;
};

export const LoginSectionEmail = () => {
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

        <Input name="gmail" placeholder="Enter your email address" />
        <Button className="bg-gray-400">Let's Go</Button>
        <p className="text-center text-[#71717A]">
          Already have an account?{" "}
          <span className="text-[#2563EB]">Log in</span>
        </p>
      </div>
      <img
        src={
          "https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eoxj5s1-TK~GrbViOZHxK4pSodBFS6rYMKOT7MoENp9L~8xsTfb7CbK4LGoDlHG024Pqnr1vEh2CEZrCiD-VdwnL8r71lYt7v1Pr5AzCuNLP~NDK~gWuXsA0RDR7wL2UcExaEeGL1oCW9ngk64IH2Cc~esUXGZL1GZYGv87ntE6buiiix1otP36jewqGMcW0WXsctBGEIq2Ss7I1bVUGWeGdx2ope~hsDVsacouAMKwyypT8HDsu1hItn4AioaX1cB~lKCaPuzUvW1vqiyk~0Rlao85PQ2~qlW~8xb1z3rhb~CzAtme-Ng5Hw-MEzmsOEXpY79aCfA-IaglXB9jnDQ__"
        }
        className="w-[856px] h-[904px] rounded-2xl"
        alt="zurag"
      />
    </div>
  );
};

export const LoginSectionPassword = () => {
  return (
    <div className="flex items-center justify-around w-full h-full">
      <div className="flex flex-col gap-6 w-[288px]">
        <Button className="bg-white border text-black px-4 py-2 w-[36px]">
          <ArrowLeft />
        </Button>
        <div>
          <p className="text-[24px] font-semibold">Create a strong password</p>
          <p className="text-[16px] text-[#71717A]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <Input name="password" placeholder="Password" type="password" />
        <Input name="confirmpassword" placeholder="Confirm" type="password" />
        <div className="flex gap-2 items-center">
          <Checkbox id="terms2" disabled className="border-[#71717A]" />
          <label htmlFor="terms2" className="text-[#71717A]">
            Show password
          </label>
        </div>
        <Button className="bg-gray-400">Let's Go</Button>
        <p className="text-center text-[#71717A]">
          Already have an account?{" "}
          <span className="text-[#2563EB]">Log in</span>
        </p>
      </div>
      <img
        src={
          "https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eoxj5s1-TK~GrbViOZHxK4pSodBFS6rYMKOT7MoENp9L~8xsTfb7CbK4LGoDlHG024Pqnr1vEh2CEZrCiD-VdwnL8r71lYt7v1Pr5AzCuNLP~NDK~gWuXsA0RDR7wL2UcExaEeGL1oCW9ngk64IH2Cc~esUXGZL1GZYGv87ntE6buiiix1otP36jewqGMcW0WXsctBGEIq2Ss7I1bVUGWeGdx2ope~hsDVsacouAMKwyypT8HDsu1hItn4AioaX1cB~lKCaPuzUvW1vqiyk~0Rlao85PQ2~qlW~8xb1z3rhb~CzAtme-Ng5Hw-MEzmsOEXpY79aCfA-IaglXB9jnDQ__"
        }
        className="w-[856px] h-[904px] rounded-2xl"
        alt="zurag"
      />
    </div>
  );
};

export const LoginSectionLogin = () => {
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

        <Input
          name="email"
          placeholder="Enter your email address"
          type="email"
        />
        <Input placeholder="Password" type="password" />
        <a className="underline">Forgot password ?</a>
        <Button className="bg-gray-400">Let's Go</Button>
        <p className="text-center text-[#71717A]">
          Already have an account?{" "}
          <span className="text-[#2563EB]">Log in</span>
        </p>
      </div>
      <img
        src={
          "https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eoxj5s1-TK~GrbViOZHxK4pSodBFS6rYMKOT7MoENp9L~8xsTfb7CbK4LGoDlHG024Pqnr1vEh2CEZrCiD-VdwnL8r71lYt7v1Pr5AzCuNLP~NDK~gWuXsA0RDR7wL2UcExaEeGL1oCW9ngk64IH2Cc~esUXGZL1GZYGv87ntE6buiiix1otP36jewqGMcW0WXsctBGEIq2Ss7I1bVUGWeGdx2ope~hsDVsacouAMKwyypT8HDsu1hItn4AioaX1cB~lKCaPuzUvW1vqiyk~0Rlao85PQ2~qlW~8xb1z3rhb~CzAtme-Ng5Hw-MEzmsOEXpY79aCfA-IaglXB9jnDQ__"
        }
        className="w-[856px] h-[904px] rounded-2xl"
        alt="zurag"
      />
    </div>
  );
};

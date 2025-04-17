"use client";

import { FoodPackage } from "@/components/FoodPackage";
import { MainPageHeader } from "@/components/MainPageHeader";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CategoryContainer } from "./components/CategoryContainer";

import { AppetizersContainer } from "./components/AppetizersContainer";
type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};
export default function Home() {
  return (
    <div className="w-full h-screen bg-[#404040]">
      <MainPageHeader />
      {/* ///////////////// */}
      <div className="w-full h-full">
        <Image
          fill
          priority
          alt="bg"
          src="https://s3-alpha-sig.figma.com/img/8984/6312/a2a7c22f5fe9122b2bd6276cdd549c3e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZT8ix8PnvS5PNCzC9Xqfe8g8T2DgO7M5SL~Xr0wI2LjCQqEDVh0ErkR4plCjukQZu4NWzuG3uAlO3IiW~xj2TXJzkTt1hAsTXfb9fM~kZzBq1ovNXX-oiElqqZiRHq2iIuq3o1xOTwmqXwtHN-rGlsh0xYvc6POiPqbmE2FFeRw0zMovo8AeroEmkEa-HRDjTUURjnZtd-cbGpkL-fnOqf1pNGbT2Hk2iepnd9Qfu~uFj7-0PiEL-bgc7yLhrRHOgNH0UFIwABTkhSqyQrPmB9nrvjtByLDhc725MYKkRofHdYQAIhYPwIwuB4oCQwHbbZ8VAw2hyJl5AXZbdjAJiA__"
        ></Image>
      </div>
      {/* ///////////////// */}
      <div className="bg-[#404040] w-full flex flex-col items-center">
        <div className="w-[90%] ">
          <CategoryContainer />
          <AppetizersContainer />
        </div>
      </div>
    </div>
  );
}

"use client";

import { FoodPackage } from "@/components/FoodPackage";
import { MainPageHeader } from "@/components/MainPageHeader";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};
export default function Home() {
  const [foodData, setFoodData] = useState<FoodType[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/food");
      setFoodData(response.data.foods);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen ">
      <MainPageHeader />
      {/* ///////////////// */}

      <div className="bg-gray-200 w-full h-full relative ">
        <div className="absolute  z-0 ">
          <div className="flex gap-5">
            <p className="text-[130px] text-[#71717A]">SAY</p>
            <p className="text-[130px] text-[#FD543F]">CHEESE</p>
            <p className="text-[130px] text-[#71717A]">·</p>
          </div>
        </div>
        <div>
          <div className="bg-black w-[90%] h-[390px] absolute top-1/5 translate-y-1/5 rounded-r-full z-5"></div>
          <div className="bg-[#FD543F] w-[97%] h-[390px] absolute -left-24 top-1/4 translate-y-1/5 rounded-full z-4"></div>
        </div>
        <Image
          className=" absolute z-7 left-1/4 -top-1/12 "
          height={917}
          width={917}
          alt="main image"
          src="https://s3-alpha-sig.figma.com/img/45c9/f811/b2ce17de6c67dc101d53db36830b072b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i8lJybACY2KjyJeDrSicGCGvw-iAsXMUywPLKjfuHWpzq4XJyumzlwzsfxD9nfGsmbMVMxprwSNYXrAxdN6Ropbqo9DF8NVI8APzqAOYVecNmTz1P10xnb5Aqvs8t3hqDsQoHJVkRekU~6KI3HQzLvQrNuU6UmgenWWh52smHOs5s6e-Tr3jb1SYSHVyO5jnmBdCgRVBvCRyMKzPqa86k3IDK~uuzI-LHx1zQ20Z2F0pHouK~qa-onmR9WXiEXI~WvQu4JY6cWec6iselbaA3PTLOnuIXsMc5MjzYOGfRuPRS8Q9LKCYmPEgxrmIMsoiIu0yvBIG7TK1O1ipk1JyVA__"
          priority
        ></Image>
      </div>

      {/* ///////////////// */}
      <div className="flex gap-1">
        {foodData.map((value, index) => (
          <FoodPackage
            key={index}
            foodName={value.foodName}
            price={value.price}
            image={value.image}
            ingredients={value.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

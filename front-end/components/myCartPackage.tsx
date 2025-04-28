"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { LineChart, X } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import MyOrderPackage from "./myOrderPackage";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  deliveryMockAddress: string;
  isAdminPage: boolean;
  foodPackageId: string;
  category: {
    _id: string;
    categoryName: string;
  };
};

export const MyCartPackage = () => {
  const [myCartfoods, setMyCartFoods] = useState<FoodType[]>([]);

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-6 ">
        <div className="w-full bg-white p-4 rounded-[20px] gap-5 flex flex-col">
          <p className="text-[20px] font-semibold">My cart</p>
          <div className="flex gap-[10px]">
            <Image
              width={124}
              height={100}
              className="w-[124px] h-[124px] bg-cover rounded-[12px]"
              alt="images"
              src="https://s3-alpha-sig.figma.com/img/ce6c/d6f5/9da9ff84c52e907b1955e23221b9a850?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ra4DJdOU07tloiolNyk-A9XYdr-KxtcnQUOnWTzv3P55tp~J7rHjZhETiBQSeSlBqnmpgX0ESHDKf~EbYROBsfYRkYn-Rk0EBXKtHXSdJ9UQZV9pOGdj47P75mNCrl0hl2C9J0wovvPmT4hjIoInk2ywP~nAoa5P74guVzFloSxgmlwNsJQg2hrKdGItJ8OMICJn8k5KQOGjkuZFN2FBvm0FsTSdy1YDV0gvHM1pHknWzKWDPTFohV~yQB0Wq0SPXzJesFr7Qz8~Qx8WgSRaQrCxcviGa6rStlZ34Nw8g0EE0d56sGq3q1vZNY2V~ecbGNM4nGM5LrftotmT5GD7Aw__"
            ></Image>
            <div className="flex flex-col justify-between">
              <div className="flex gap-[10px]">
                <div>
                  <p className="text-[16px] font-bold text-[#EF4444]">
                    Sunshine Stackers
                  </p>
                  <p className="text-[12px]">
                    Fluffy pancakes stacked with fruits, cream, syrup, anmd
                    powdered sugar.
                  </p>
                </div>
                <Button className="bg-transparent rounded-full border border-[#EF4444] w-[36px] h-[36px]">
                  <X className="text-[#EF4444]" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Button className="bg-transparent border-none text-black shadow-none">
                    -
                  </Button>
                  <p className="text-[18px] font-semibold">1</p>
                  <Button className="bg-transparent border-none text-black shadow-none">
                    +
                  </Button>
                </div>
                <p className="text-[16px] font-bold">$12.99</p>
              </div>
            </div>
          </div>
          <Button className="bg-transparent border border-[#EF4444] text-[#EF4444] rounded-full">
            Add food
          </Button>
        </div>
        <div className="bg-white p-4 rounded-[20px] gap-5 flex flex-col">
          <p className="text-[20px] font-semibold">Payment info</p>
          <div className="flex justify-between">
            <p className="text-[16px] text-[#71717A] ">Items</p>
            <p className="text-[16px] font-bold">$25.98</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px] text-[#71717A] ">Shipping</p>
            <p className="text-[16px] font-bold">$0.99</p>
          </div>
          <div className="border border-dashed border-[#71717A] "></div>
          <div className="flex justify-between">
            <p className="text-[16px] text-[#71717A] ">Total</p>
            <p className="text-[16px] font-bold">$26.97</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger className="text-white bg-[#EF4444] rounded-full py-2">
              Checkout
            </AlertDialogTrigger>
            <AlertDialogContent className="">
              <AlertDialogHeader className="flex flex-col items-center justify-center">
                <AlertDialogTitle>
                  Your order has been successfully placed !
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <Image
                    alt="image"
                    width={156}
                    height={265}
                    className="w-[156px] h-[265px]"
                    src="/illustration.png"
                  ></Image>
                </AlertDialogDescription>
                <AlertDialogCancel className="rounded-full bg-gray-200 px-8 text-[14px]">
                  Close
                </AlertDialogCancel>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default MyCartPackage;

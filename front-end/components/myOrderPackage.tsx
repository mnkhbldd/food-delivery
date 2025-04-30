"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Clock3, LineChart, Soup, X } from "lucide-react";
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
import { Badge } from "./ui/badge";

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

export const MyOrderPackage = () => {
  const [myCartfoods, setMyCartFoods] = useState<FoodType[]>([]);
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-6 ">
        <div className="w-full bg-white p-4 rounded-[20px] gap-5 flex flex-col">
          <p className="text-[20px] font-semibold">Order history</p>
          <div className="flex justify-between">
            <p className="font-bold text-[16px]">
              $26.97 <span>(#20156)</span>
            </p>
            <Badge className="border-[#EF4444] bg-transparent rounded-full text-black">
              PENDING
            </Badge>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Soup />
              <p className="text-[12px] text-[#71717A]">Sunshine stackers</p>
            </div>
            <p>x 1</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Soup />
              <p className="text-[12px] text-[#71717A]">Sunshine stackers</p>
            </div>
            <p>x 1</p>
          </div>
          <div className="flex gap-2">
            <Clock3 />
            <p className="text-[12px] text-[#71717A]">2024/12/20</p>
          </div>
          <div>
            <p className="text-[12px] text-[#71717A]">
              2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg |
              100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД
              нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд
              талд 4д ногоон20
            </p>
          </div>
          <div className="border border-dashed border-[#71717A] "></div>
          <div className="flex justify-between">
            <p className="font-bold text-[16px]">
              $26.97 <span>(#20156)</span>
            </p>
            <Badge className=" bg-gray-300 rounded-full text-black">
              DELIVERED
            </Badge>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Soup />
              <p className="text-[12px] text-[#71717A]">Sunshine stackers</p>
            </div>
            <p>x 1</p>
          </div>
          <div className="flex gap-2">
            <Clock3 />
            <p className="text-[12px] text-[#71717A]">2024/12/20</p>
          </div>
          <div>
            <p className="text-[12px] text-[#71717A]">
              2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg |
              100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД
              нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд
              талд 4д ногоон20
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderPackage;

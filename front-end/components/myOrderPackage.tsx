"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge, LineChart, X } from "lucide-react";
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
          <div>
            <p>
              $26.97 <span>(#20156)</span>
            </p>
            <Badge className="border-[#EF4444]">Pending</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderPackage;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
import { jwtDecode } from "jwt-decode";
import axios from "axios";

interface DecodedToken {
  userId: string;

  _id: string;
}

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
  const [userId, setUserId] = useState<string | null>(null);
  const [foodOrder, setFoodOrder] = useState<FoodType[]>([]);

  const fetchUserId = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken: DecodedToken = jwtDecode(token);
        if (decodedToken._id) {
          setUserId(decodedToken._id);
        } else {
          console.error("User ID not found in token");
        }
      } else {
        console.error("Token not found in localStorage");
      }
    } catch (error) {
      console.error("Error decoding token", error);
    }
  };

  const fetchFoodOrder = async () => {
    if (!userId) {
      console.error("User ID is null, cannot fetch orders");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/foodOrder/foodList/${userId}`
      );

      setFoodOrder(response.data.foodOrders);
      console.log(response.data.foodOrders, "foodOrder");
    } catch (error) {
      console.error("Error fetching food orders", error);
    }
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchFoodOrder();
    }
  }, [userId]);

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-6 ">
        <div className="w-full bg-white p-4 rounded-[20px] gap-5 flex flex-col">
          <p className="text-[20px] font-semibold">Order history</p>
          {foodOrder.map((order, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                {" "}
                <div className="flex justify-between">
                  <p className="font-bold text-[16px]">
                    $26.97 <span>(#20156)</span>
                  </p>
                  <Badge className="border-[#EF4444] bg-transparent rounded-full text-black">
                    PENDING
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Clock3 />
                  <p className="text-[12px] text-[#71717A]">2024/12/20</p>
                </div>
                <div>
                  <p className="text-[12px] text-[#71717A]">
                    2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen
                    emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД,
                    12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100
                    айлын гүүрэн гарцны хойд талд 4д ногоон20
                  </p>
                </div>
              </div>
            );
          })}
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

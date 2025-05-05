"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { FoodOrderList } from "./components/foodOrderList";

type OrdersData = {
  user: {
    email: string;
    number: number;

    address: string;
  };
  createdAt: string;
  totalPrice: string;
  foodOrderItems: any[];
};

const OrdersPage: React.FC = () => {
  const [ordersData, setOrdersData] = useState<OrdersData[]>([]);

  const fetchOrdersData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/foodOrder`
      );
      setOrdersData(response.data.foodOrders);
    } catch (error) {
      console.error("cannot get orders data", error);
    }
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);

  return (
    <div className="w-full h-full flex justify-center bg-[#F4F4F5]">
      <div className="w-[90%] flex flex-col gap-6">
        <div className="flex justify-end w-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-between w-full bg-white items-center p-4 border  ">
          <div className="flex flex-col">
            <p className="text-[20px] font-semibold">Orders</p>
            <p className="text-[#71717A] text-[12px]">32 items</p>
          </div>
          <div className="flex gap-3">
            <div>
              {" "}
              <input
                className="px-4 rounded-full bg-gray-400 py-[6px]"
                type="date"
              ></input>
            </div>

            <Button className="px-4 py-2 rounded-full">
              <div>Change delivery state</div>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-around border">
          <div className="p-4">
            <input type="checkbox"></input>
          </div>
          <p className="p-4">#</p>
          <p className="p-4 w-[150px]">Email</p>
          <p className="w-[180px]">Food</p>
          <p className="w-[150px] p-4">Date</p>
          <p className="p-4 w-[160px]">Price</p>
          <p className="w-[300px] px-4 flex ">Address</p>
          <p className="w-[180px]">Delivery state</p>
        </div>
        {ordersData.map((value, index) => {
          return (
            <div key={index}>
              <FoodOrderList
                foods={value.foodOrderItems}
                email={value.user.email}
                number={index}
                totalPrice={value.totalPrice}
                address={value.user.address}
                createdAt={value.createdAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersPage;

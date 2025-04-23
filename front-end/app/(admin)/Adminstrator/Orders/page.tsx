import React, { useState } from "react";
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

const OrdersPage: React.FC = () => {
  const testText = `2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg |
            100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД
            нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд
            талд 4д ногоон20`;

  const [ordersData, setOrdersData] = useState([]);

  const fetchOrdersData = async () => {
    try {
      const response = axios.get("http://localhost:8000/order/foodOrder");
      setOrdersData(response.data.foodOrders);
    } catch (error) {
      console.error("cannot get orders data", error);
    }
  };

  const slicedText = testText.slice(0, 53);
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
              Change delivery state
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
        <div className="flex items-center justify-around border">
          <div className="p-4">
            <input type="checkbox"></input>
          </div>
          <p className="p-4">1</p>
          <p className="p-4">test@gmail.com</p>
          <Select>
            <SelectTrigger className="w-[180px] rounded-full px-2 border-none shadow-none">
              <SelectValue placeholder="2 Foods " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">PENDING</SelectItem>
              <SelectItem value="dark">DELIVERED</SelectItem>
              <SelectItem value="system">CANCELLED</SelectItem>
            </SelectContent>
          </Select>
          <p className="w-[150px] p-4">2024/12/30</p>
          <p className="p-4 w-[160px]">$26.97</p>
          <p className="w-[300px] px-4 flex h-[42px]">{slicedText + "..."}</p>
          <Select>
            <SelectTrigger className="w-[180px] rounded-full px-2">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">PENDING</SelectItem>
              <SelectItem value="dark">DELIVERED</SelectItem>
              <SelectItem value="system">CANCELLED</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

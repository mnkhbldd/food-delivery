"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import { User } from "lucide-react";
import React, { useEffect, useState } from "react";

type categoryNameDataType = {
  categoryName: String;
};

const AdministratorPage = () => {
  const [categoryNameData, setCategoryNameData] = useState<
    categoryNameDataType[]
  >([]);
  const fetchCategoryNameData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setCategoryNameData(response.data.categories);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategoryNameData();
  }, []);
  return (
    <div className="bg-[#F4F4F5] w-full h-full flex flex-col items-center">
      <div className="w-[90%]">
        <div>
          <Avatar className="w-[36px] h-[36px] ">
            <AvatarImage src="" alt="@avatar" />
            <AvatarFallback className="bg-[#EF4444]">
              <User className="text-white" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-white ">
          <p className="text-[20px] font-semibold">Dishes Category</p>
          <div className="flex gap-3">
            {categoryNameData.map((value, index) => {
              return (
                <div className="flex gap-[8px] rounded-full border w-fit bg-white px-4 py-2">
                  <p className="text-[14px] rounded-full">
                    {value.categoryName}
                  </p>
                  <div className="text-white text-[14px] bg-black rounded-full px-[10px] py-[2px]   ">
                    23
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministratorPage;

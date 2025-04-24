"use client";
import { AppetizersContainer } from "@/app/(main)/components/AppetizersContainer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import axios from "axios";
import { Plus, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AppetizersContainerAdmin } from "./components/AppetizersContainerAdmin";

type CategoryNameDataType = {
  _id: string;
  categoryName: string;
};

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  _id: string;
  category: {
    _id: string;
    categoryName: string;
  };
};

const AdministratorPage = () => {
  const [categoryNameData, setCategoryNameData] = useState<
    CategoryNameDataType[]
  >([]);
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCategoryName, setSelectedCategoryName] =
    useState<string>("All Dishes");

  const fetchCategoryNameData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setCategoryNameData(response.data.categories);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  const fetchFoods = async () => {
    try {
      const response = await axios.get("http://localhost:8000/food");
      setFoods(response.data.foods);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  const getCountForCategory = (categoryName: string) => {
    return foods.filter((food) => food.category?.categoryName === categoryName)
      .length;
  };

  useEffect(() => {
    fetchCategoryNameData();
    fetchFoods();
  }, []);
  return (
    <div className="bg-[#F4F4F5] w-full h-full flex flex-col items-center">
      <div className="w-[90%] flex flex-col gap-[48px]">
        <div>
          <Avatar className="w-[36px] h-[36px] ">
            <AvatarImage src="" alt="@avatar" />
            <AvatarFallback className="bg-[#EF4444]">
              <User className="text-white" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-white rounded-[12px] ">
          <p className="text-[20px] font-semibold">Dishes Category</p>
          <div className="flex gap-3 flex-wrap">
            <div
              onClick={() => {
                setSelectedCategory("all");
                setSelectedCategoryName("All Dishes");
              }}
              className="flex gap-[8px] rounded-full border w-fit bg-white px-4 py-2 "
            >
              <p className="text-[14px] rounded-full">All Dishes</p>
              <div className="text-white text-[14px] bg-black rounded-full px-[10px] py-[2px]   ">
                {foods.length}
              </div>
            </div>
            {categoryNameData.map((value, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCategory(value._id);
                    setSelectedCategoryName(value.categoryName);
                  }}
                  className={`flex gap-[8px] rounded-full border w-fit px-4 py-2 cursor-pointer ${
                    selectedCategory === value._id
                      ? "border-[#EF4444]"
                      : "border"
                  }`}
                >
                  <p className="text-[14px] rounded-full">
                    {value.categoryName}
                  </p>
                  <div className="text-white text-[14px] bg-black rounded-full px-[10px] py-[2px]   ">
                    {getCountForCategory(value.categoryName)}
                  </div>
                </div>
              );
            })}
            <Button className="rounded-full w-[40px] h-[40px] bg-[#EF4444]">
              <Plus />
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-[12px] p-5">
          <AppetizersContainerAdmin
            selectedCategory={selectedCategory}
            selectedCategoryName={selectedCategoryName}
            deliveryMockAddress={"test"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdministratorPage;

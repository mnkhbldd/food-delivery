"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FoodPackage } from "@/components/FoodPackage";
import axios from "axios";
import { useEffect, useState } from "react";
import { CategoryContainer } from "../components/CategoryContainer";
import { Badge } from "@/components/ui/badge";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  deliveryMockAddress: string;
};

function foodsByCategoryPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [foodsByCategory, setFoodsByCategory] = useState<FoodType[]>([]);
  const [foodCategoryNames, setfoodCategoryNames] = useState<
    { categoryName: string }[]
  >([]);

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setfoodCategoryNames(response.data.categories);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  const fetchFoodsByCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/food/${categoryId}`
      );
      setFoodsByCategory(response.data.foods);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
    fetchFoodsByCategory();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen bg-[#404040] items-center">
      <div className="w-[90%]  overflow-hidden">
        <div className="flex gap-4">
          {foodCategoryNames.map((value, index) => {
            return (
              <Badge
                key={index}
                className="bg-white text-black rounded-full text-[18px] font-normal min-w-[151px]"
              >
                {value.categoryName}
              </Badge>
            );
          })}
        </div>
      </div>
      <div className="w-[90%] ">
        {foodsByCategory.map((value, index) => (
          <FoodPackage
            key={index}
            deliveryMockAddress={deliveryMockAddress}
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

export default foodsByCategoryPage;

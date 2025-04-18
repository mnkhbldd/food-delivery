import axios from "axios";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type foodCategoryDataType = {
  categoryName: string;
};

export const CategoryContainer = () => {
  const [foodCategoryData, setfoodCategoryData] = useState<
    foodCategoryDataType[]
  >([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setfoodCategoryData(response.data.categories);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };
  console.log(foodCategoryData);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-9 py-8">
      <p className="text-[30px] text-white font-semibold">Categories</p>
      <Carousel className="w-full ">
        <CarouselContent className="">
          {foodCategoryData.map((food, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-2/3 lg:basis-1/8"
            >
              <Badge className="bg-white text-black rounded-full text-[18px] font-normal min-w-[151px]">
                {food.categoryName}
              </Badge>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent border-none text-white" />
        <CarouselNext className="bg-transparent border-none text-white" />
      </Carousel>
    </div>
  );
};

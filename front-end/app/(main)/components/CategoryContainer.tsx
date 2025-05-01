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
import { useRouter } from "next/navigation";

type foodCategoryDataType = {
  categoryName: string;
  _id: string;
};

export const CategoryContainer = () => {
  const [foodCategoryData, setfoodCategoryData] = useState<
    foodCategoryDataType[]
  >([]);

  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setfoodCategoryData(response.data.categories);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-9 pt-8">
      <p className="text-[30px] text-white font-semibold">Categories</p>
      <Carousel className="w-full ">
        <CarouselContent className="flex">
          {foodCategoryData.map((food, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/9 flex justify-center cursor-pointer"
            >
              <Badge className="bg-white text-black rounded-full text-[18px] font-normal min-w-[151px] text-center">
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

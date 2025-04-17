import { FoodPackage } from "@/components/FoodPackage";
import axios from "axios";
import { useEffect, useState } from "react";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};
export const AppetizersContainer = () => {
  const [appetizerData, setAppetizerData] = useState<FoodType[]>([]);

  const fetchAppetizerData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/food/6800b55bd95efcaef95fc881"
      );
      setAppetizerData(response.data.foods);
      console.log(appetizerData, "appetizerData");
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  useEffect(() => {
    fetchAppetizerData();
  }, []);

  return (
    <div>
      <p className="text-[30px] text-white font-semibold">Appetizers</p>
      <div className="flex gap-9 flex-wrap">
        {appetizerData.map((value, index) => (
          <FoodPackage
            key={index}
            foodName={value.foodName}
            price={value.price}
            image={value.image}
            ingredients={value.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

import { FoodPackage } from "@/components/FoodPackage";
import axios from "axios";
import { useEffect, useState } from "react";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  foodPackageId: string;
  _id: string;
  categoryName: string;
  foods: any[];
};
export const AppetizersContainer = ({
  deliveryMockAddress,
}: {
  deliveryMockAddress: string;
}) => {
  const [appetizerData, setAppetizerData] = useState<FoodType[]>([]);

  const fetchAppetizerData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/food");
      setAppetizerData(response.data.foods);
      console.log(response.data.foods);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  useEffect(() => {
    fetchAppetizerData();
  }, []);

  return (
    <div className="flex flex-col gap-[54px]">
      {appetizerData.map((value, index) => {
        return (
          <div key={index} className="flex flex-col gap-[54px]">
            <p className="text-[30px] text-white font-semibold">
              {value.categoryName}
            </p>
            <div className="flex gap-9 flex-wrap">
              {value.foods.map((value, index) => (
                <FoodPackage
                  key={index}
                  foodName={value.foodName}
                  price={value.price}
                  image={value.image}
                  ingredients={value.ingredients}
                  foodPackageId={value._id}
                  deliveryMockAddress={deliveryMockAddress}
                  isAdminPage={false}
                  category={value.category}
                  value={value}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

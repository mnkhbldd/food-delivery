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
  category: {
    _id: string;
    categoryName: string;
  };
};
export const AppetizersContainer = ({
  deliveryMockAddress,
}: {
  deliveryMockAddress: string;
}) => {
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

  const slicedData = appetizerData.slice(0, 6);

  useEffect(() => {
    fetchAppetizerData();
  }, []);

  return (
    <div className="flex flex-col gap-[54px]">
      <p className="text-[30px] text-white font-semibold">Appetizers</p>
      <div className="flex gap-9 flex-wrap">
        {slicedData.map((value, index) => (
          <FoodPackage
            value={value}
            foodPackageId={value._id}
            deliveryMockAddress={deliveryMockAddress}
            key={index}
            foodName={value.foodName}
            price={value.price}
            image={value.image}
            ingredients={value.ingredients}
            isAdminPage={false}
            category={{
              _id: value.category?._id || "",
              categoryName: value.category?.categoryName || "Unknown",
            }}
          />
        ))}
      </div>
    </div>
  );
};

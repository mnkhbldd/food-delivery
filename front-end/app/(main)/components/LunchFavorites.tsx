import { FoodPackage } from "@/components/FoodPackage";
import axios from "axios";
import { useEffect, useState } from "react";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  deliveryMockAddress: string;
  isAdminPage: boolean;
  _id: string;
  category: {
    _id: string;
    categoryName: string;
  };
};
export const LunchFavoritesContainer = ({
  deliveryMockAddress,
}: {
  deliveryMockAddress: string;
}) => {
  const [lunchFavorites, setlunchFavorites] = useState<FoodType[]>([]);

  const fetchLunchFavoritesData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/food/6800b579d95efcaef95fc887"
      );
      setlunchFavorites(response.data.foods);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  const slicedData = lunchFavorites.slice(0, 6);

  useEffect(() => {
    fetchLunchFavoritesData();
  }, []);

  return (
    <div className="flex flex-col gap-[54px]">
      <p className="text-[30px] text-white font-semibold">Lunch favorites</p>
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

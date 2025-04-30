import { FoodPackage } from "@/components/FoodPackage";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, Trash } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

type FoodCategory = {
  categoryName: string;
  _id: string;
};
export const AppetizersContainerAdmin = ({
  deliveryMockAddress,
  selectedCategory,
  selectedCategoryName,
}: {
  deliveryMockAddress: string;
  selectedCategory: string;
  selectedCategoryName: string;
}) => {
  const [appetizerData, setAppetizerData] = useState<FoodType[]>([]);
  const [FoodCategoryNames, setFoodCategoryNames] = useState<FoodCategory[]>(
    []
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fetchAppetizerData = async () => {
    try {
      const url =
        selectedCategory === "all"
          ? "http://localhost:8000/food"
          : `http://localhost:8000/food/${selectedCategory}`;
      const response = await axios.get(url);
      const data = response.data.foods || response.data.food;
      setAppetizerData(data);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };
  const fetchfoodCategoryNames = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setFoodCategoryNames(response.data.categories);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  const [newfoodName, setNewFoodName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newImage, setNewImage] = useState("");
  const [newIngredients, setNewIngreadietse] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const createNewFood = async () => {
    const requestBody = {
      foodName: newfoodName,
      price: newPrice,
      image: newImage,
      ingredients: newIngredients,
      category: newCategory,
    };
    try {
      const response = await axios.post(
        `http://localhost:8000/food`,
        requestBody
      );
    } catch (error) {
      console.error("cannot create new food", error);
    }
  };

  useEffect(() => {
    fetchAppetizerData();
    fetchfoodCategoryNames();
  }, [selectedCategory]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col gap-[54px]">
      <p className="text-[30px] text-black font-semibold">
        {selectedCategoryName} ({appetizerData.length})
      </p>
      <div className="flex gap-9 flex-wrap">
        <div className="w-[397px] h-[352px] rounded-[20px] p-[20px]  bg-white border border-dashed border-[#EF4444]">
          <AlertDialog>
            <AlertDialogTrigger
              asChild
              className="flex items-center justify-center w-full h-full"
            >
              <div className="flex flex-col justify-center items-center">
                {" "}
                <div className="w-fit bg-[#EF4444] rounded-full p-2 ">
                  <Plus className="text-white size-5" />
                </div>
                <p>Add new dishes</p>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col gap-[24px]">
                <AlertDialogTitle>Dishes info</AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
                <div className="flex flex-col gap-[24px]">
                  <div className="flex justify-between w-full">
                    <p>Dish name</p>
                    <textarea
                      value={newfoodName}
                      onChange={(e) => setNewFoodName(e.target.value)}
                      className="border w-[60%] rounded-[6px] p-1 h-[80px] resize-none overflow-y-auto text-wrap break-words"
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <p>Dish category</p>
                    <Select
                      onValueChange={setNewCategory}
                      defaultValue={selectedCategory}
                    >
                      <SelectTrigger className="w-[60%]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {FoodCategoryNames.map((value, index) => (
                            <SelectItem key={index} value={value._id}>
                              {value.categoryName || "Unknown"}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>Ingredients</p>
                    <textarea
                      value={newIngredients}
                      onChange={(e) => setNewIngreadietse(e.target.value)}
                      className="border w-[60%] rounded-[6px] p-1 h-[80px] resize-none overflow-y-auto text-wrap break-words"
                    />
                  </div>
                  <div className="flex justify-between w-full h-fit">
                    <p>Price</p>
                    <input
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(Number(e.target.value) || 0)}
                      className="border w-[60%] rounded-[6px] p-1"
                    />
                  </div>
                  <div className="flex justify-between w-full h-fit">
                    <p>Image</p>
                    <input
                      type="file"
                      accept="image/*"
                      className="border w-[60%] rounded-[6px] p-1"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <AlertDialogCancel
                    className="w-fit border-red-400"
                    onClick={() => {}}
                  >
                    <Trash className="text-red-400" />
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={createNewFood} className="w-fit">
                    Save changes
                  </AlertDialogAction>
                </div>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        {appetizerData.map((value, index) => (
          <FoodPackage
            value={value}
            foodPackageId={value._id}
            deliveryMockAddress={deliveryMockAddress}
            key={index}
            foodName={value.foodName}
            price={value.price}
            image={value.image}
            ingredients={value.ingredients}
            isAdminPage={true}
            category={value.category || { _id: "", categoryName: "Unknown" }}
          />
        ))}
      </div>
    </div>
  );
};

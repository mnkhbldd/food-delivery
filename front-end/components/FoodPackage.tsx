import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
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
import { HandPlatter, Pencil, Plus, Trash, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useRef, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Textarea } from "./ui/textarea";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  deliveryMockAddress: string;
  isAdminPage: boolean;
  foodPackageId: string;
  category: {
    _id: string;
    categoryName: string;
  };
  value: any;
};

type FoodCategory = {
  categoryName: string;
  _id: string;
};

export const FoodPackage = ({
  category,
  value,
  deliveryMockAddress,
  foodPackageId,
  isAdminPage,
  foodName,
  price,
  image,
  ingredients,
}: FoodType) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const [updatedFoodName, setUpdatedFoodName] = useState(foodName);
  const [ingredientstext, setIngredientstext] = useState(ingredients);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedImage, setUpdatedImage] = useState(image);
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSaveFoodsInCart = (food: any) => {
    const card = JSON.parse(window.localStorage.getItem("foods")!);
    const newCard = card
      ? [...card, { ...food, quantity }]
      : [{ ...food, quantity }];
    window.localStorage.setItem("foods", JSON.stringify(newCard));
  };

  const [foodCategoryNames, setFoodCategoryNames] = useState<FoodCategory[]>(
    []
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(
    category._id
  );

  const fetchfoodCategoryNames = async () => {
    try {
      const response = await axios.get("http://localhost:8000/category");
      setFoodCategoryNames(response.data.categories);
    } catch (error) {
      console.error("cannot fetch data", error);
    }
  };

  const handleOnDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/food/${foodPackageId}`
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to delete dish", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const requestBody = {
        foodName: updatedFoodName,
        category: selectedCategory,
        ingredients: ingredientstext,
        price: updatedPrice,
        image,
      };
      console.log("Request body:", requestBody);
      const response = await axios.put(
        `http://localhost:8000/food/${foodPackageId}`,
        requestBody
      );
    } catch (error) {
      console.error("Failed to update dish", error);
    }
  };

  useEffect(() => {
    fetchfoodCategoryNames();
  }, []);

  return (
    <div className="w-[397px] min-h-[342px] bg-white border rounded-[20px] p-[20px] h-fit">
      <div className="relative">
        <Image
          height={210}
          width={365}
          className="rounded-[12px] w-[365px] h-[210px] object-cover"
          src={image || "/default-image.jpg"}
          alt="Food package"
          unoptimized={true}
        />

        <AlertDialog>
          <AlertDialogTrigger>
            {isAdminPage ? (
              <div className="absolute w-[335px] h-[200px] top-1 left-3">
                <div className="absolute bg-white rounded-full p-2 right-2 bottom-2">
                  <Pencil className="text-[#EF4444] size-5" />
                </div>
              </div>
            ) : (
              <div className="absolute w-[335px] h-[200px] top-1 left-3">
                <div className="absolute bg-white rounded-full p-2 right-2 bottom-2">
                  <Plus className="text-[#EF4444] size-5" />
                </div>
              </div>
            )}
          </AlertDialogTrigger>
          {isAdminPage ? (
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col gap-[24px]">
                <AlertDialogTitle>Dishes info</AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
                <div className="flex flex-col gap-[24px]">
                  <div className="flex justify-between w-full">
                    <p>Dish name</p>
                    <textarea
                      ref={inputRef}
                      value={updatedFoodName}
                      onChange={(e) => setUpdatedFoodName(e.target.value)}
                      className="border w-[60%] rounded-[6px] p-1 h-[80px] resize-none overflow-y-auto text-wrap break-words"
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <p>Dish category</p>
                    <Select
                      onValueChange={setSelectedCategory}
                      defaultValue={category._id}
                    >
                      <SelectTrigger className="w-[60%]">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {foodCategoryNames.map((value, index) => (
                            <SelectItem key={index} value={value._id}>
                              {value.categoryName}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>Ingredients</p>
                    <textarea
                      ref={inputRef}
                      value={ingredientstext}
                      onChange={(e) => setIngredientstext(e.target.value)}
                      className="border w-[60%] rounded-[6px] p-1 h-[80px] resize-none overflow-y-auto text-wrap break-words"
                    />
                  </div>
                  <div className="flex justify-between w-full h-fit">
                    <p>Price</p>
                    <input
                      type="number"
                      value={updatedPrice}
                      onChange={(e) => setUpdatedPrice(Number(e.target.value))}
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
                    onClick={handleOnDelete}
                  >
                    <Trash className="text-red-400" />
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={handleUpdate} className="w-fit">
                    Save changes
                  </AlertDialogAction>
                </div>
              </AlertDialogHeader>
            </AlertDialogContent>
          ) : deliveryMockAddress.length > 0 ? (
            <AlertDialogContent className="w-fit h-fit !max-w-fit">
              <AlertDialogHeader>
                <AlertDialogDescription></AlertDialogDescription>
                <div className="flex gap-6">
                  <Image
                    width={367}
                    height={364}
                    className="rounded-[12px] w-[367px] h-[364px] object-cover"
                    src={image}
                    alt="Food package"
                    priority
                    unoptimized={true}
                  />
                  <div className="w-[377px] flex flex-col justify-between">
                    <div className="w-full flex flex-col">
                      <AlertDialogCancel className="rounded-full w-[36px] h-[36px] self-end">
                        <X />
                      </AlertDialogCancel>
                      <AlertDialogTitle className="text-[30px] font-semibold text-[#EF4444]">
                        {foodName}
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-[16px]">
                        {ingredients}
                      </AlertDialogDescription>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <p className="text-[16px]">Total price</p>
                          <p className="text-[24px] font-semibold">
                            ${`${price}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            onClick={handleDecreaseQuantity}
                            className="w-[44px] h-[44px] rounded-full bg-transparent text-black border border-black"
                          >
                            <div>-</div>
                          </Button>
                          <p className="text-[18px] font-semibold">
                            {quantity}
                          </p>
                          <Button
                            onClick={handleIncreaseQuantity}
                            className="w-[44px] h-[44px] rounded-full bg-transparent text-black border border-black"
                          >
                            <div>+</div>
                          </Button>
                        </div>
                      </div>
                      <AlertDialogAction
                        onClick={() => handleSaveFoodsInCart(value)}
                        className="rounded-full bg-[#18181B] h-[44px]"
                      >
                        Add to cart
                      </AlertDialogAction>
                    </div>
                  </div>
                </div>
              </AlertDialogHeader>
              <AlertDialogFooter />
            </AlertDialogContent>
          ) : (
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col items-center gap-[45px] w-full">
                <AlertDialogTitle>
                  Please select your delivery address!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="142"
                    height="116"
                    viewBox="0 0 142 116"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M66.265 0.752733C65.5332 1.48993 65.5063 1.64979 65.5749 4.87232C65.6138 6.71607 65.5208 8.35062 65.3679 8.50409C65.2147 8.65756 63.5938 9.00286 61.7657 9.27082C53.7499 10.4468 47.0105 12.8161 39.858 16.9735C34.6939 19.9752 31.8946 22.0872 27.6653 26.1724C23.2932 30.3958 20.4071 34.0788 16.6895 40.1794C15.6219 41.9318 13.5689 46.0325 13.5689 46.4135C13.5689 46.4917 13.2341 47.2935 12.825 48.1951C10.5233 53.2659 8.47577 62.6281 8.40174 68.4197C8.35067 72.4251 8.50931 72.2531 4.5315 72.6194C1.51852 72.8971 1.04108 73.0195 0.54008 73.6428C-0.247385 74.6227 -0.171237 75.6903 0.752206 76.6208C1.52668 77.4012 1.56324 77.4064 4.9071 77.2088C6.76275 77.0992 12.3602 76.8078 17.3461 76.5611C22.332 76.3145 28.7909 75.9768 31.6994 75.8105C40.0514 75.3337 42.1651 75.2238 46.3548 75.0505C50.4749 74.88 58.0495 74.4753 66.4494 73.9771C69.1916 73.8142 73.4163 73.6093 75.8373 73.5213C78.2583 73.4333 81.3178 73.3002 82.6362 73.2259C83.9546 73.1516 88.2965 72.9458 92.2852 72.7686C96.2739 72.5917 101.713 72.317 104.372 72.1584C107.031 71.9997 110.771 71.7914 112.682 71.6952C114.593 71.599 116.973 71.4613 117.97 71.3895C118.967 71.3176 121.483 71.1794 123.56 71.0819C137.107 70.448 140.758 70.1386 141.379 69.5722C142.191 68.8317 142.211 66.9642 141.414 66.2376C140.926 65.7925 140.311 65.7221 137.489 65.7876C135.649 65.8305 134.043 65.7654 133.922 65.643C133.8 65.5202 133.472 63.886 133.193 62.0109C132.627 58.2043 132.516 57.666 131.894 55.7089C131.654 54.9553 131.3 53.7221 131.106 52.9684C130.912 52.2148 130.631 51.3604 130.481 51.0696C130.331 50.7788 130.208 50.3857 130.208 50.1966C130.208 49.4828 127.333 43.0265 125.83 40.363C123.839 36.8375 122.087 34.1232 121.184 33.1653C120.795 32.7524 120.118 31.9351 119.679 31.3489C117.822 28.8666 114.044 25.0622 110.957 22.5656C108.558 20.6253 101.935 16.2314 99.9907 15.2899C91.4132 11.1365 83.3947 9.00621 74.8096 8.60062C72.1003 8.47242 70.8049 8.28942 70.5106 7.99314C70.2568 7.73736 70.0797 6.87958 70.0643 5.83241C70.0062 1.89004 69.9201 1.26247 69.3487 0.626365C68.557 -0.255163 67.2102 -0.200049 66.265 0.752733ZM42.2691 22.5945C42.2655 22.804 41.6874 23.8853 40.9849 24.998C39.0564 28.0506 35.3263 35.1095 35.3257 35.7075C35.3254 35.844 34.9855 36.7045 34.57 37.6198C34.1545 38.5351 33.8146 39.4581 33.8146 39.6709C33.8146 39.8835 33.6883 40.188 33.5338 40.3469C33.1265 40.7665 31.2186 48.3677 30.6717 51.7504C30.2021 54.6523 30.0308 56.3807 29.7361 61.1899C29.4744 65.4572 28.7 66.0482 23.263 66.1317C19.0455 66.1965 18.2762 65.8704 17.5132 63.6945C16.9466 62.0788 17.3379 59.9494 19.316 53.8819C20.9383 48.9061 21.2867 48.0291 23.0046 44.5947C25.7366 39.1329 28.1168 35.4779 31.7299 31.1967C36.6193 25.4029 42.2999 20.7663 42.2691 22.5945ZM84.1265 83.6371C79.1243 83.7589 65.8033 84.3728 59.0461 84.793C53.5381 85.1355 51.0841 85.2735 42.8798 85.7028C38.1432 85.9504 32.6361 86.2866 30.6417 86.4498C28.6474 86.613 23.1403 86.8977 18.4037 87.0825C13.6671 87.2677 9.60409 87.4805 9.37504 87.5557C8.94656 87.6964 8.97768 88.1933 9.61285 91.3355C10.0821 93.6585 11.4183 98.1015 12.0638 99.4854C12.4013 100.209 12.8957 101.377 13.1622 102.082C14.5235 105.68 17.4364 110.769 20.0602 114.134C20.8601 115.16 21.5369 116 21.5644 116C21.5919 116 22.2857 115.674 23.1064 115.277C27.2952 113.247 29.265 112.362 30.5907 111.915C34.8812 110.469 42.053 109.533 46.9452 109.781C51.4954 110.012 75.3502 110.005 78.6874 109.772C82.1781 109.528 84.2311 109.112 86.2418 108.241C86.9065 107.953 88.9462 107.101 90.7744 106.349C92.6025 105.597 94.2342 104.873 94.4004 104.74C94.5666 104.607 96.2939 103.803 98.2387 102.953C100.183 102.103 102.019 101.272 102.318 101.107C102.968 100.747 105.329 99.6678 111.02 97.1292C113.347 96.0912 115.93 94.9188 116.761 94.5239C117.592 94.1287 119.088 93.4405 120.085 92.9944C122.078 92.1028 124.52 90.9643 128.301 89.1641C129.663 88.5161 130.861 87.986 130.965 87.986C131.395 87.986 134.398 86.4711 134.591 86.1571C134.706 85.9696 134.548 85.5317 134.241 85.1843C132.88 83.6432 130.225 83.3317 126.713 84.3009C123.685 85.1365 119.578 86.4157 118.877 86.7421C118.544 86.8965 117.184 87.3748 115.855 87.8045C112.16 88.9987 104.046 91.8586 102.939 92.3565C102.398 92.6001 101.275 93.0306 100.444 93.3135C99.6129 93.5961 97.5733 94.3044 95.9113 94.8875C92.5962 96.0507 82.3999 98.2492 78.9639 98.5421C76.3081 98.7683 75.3662 98.554 74.7328 97.5799C73.6375 95.8954 74.4579 93.5675 76.4147 92.8068C77.4648 92.3985 81.7862 91.6525 83.139 91.6455C84.2628 91.64 91.1623 90.5298 95.4487 89.6644C98.4768 89.0536 100.735 87.8791 101.336 86.6035C101.923 85.3563 101.92 85.099 101.309 84.1584L100.814 83.3975L93.8299 83.4839C89.989 83.5317 85.6223 83.6006 84.1265 83.6371Z"
                      fill="#EF4444"
                    />
                  </svg>
                </AlertDialogDescription>
                <AlertDialogCancel className="rounded-full px-12 bg-[#F4F4F5] ">
                  Cancel
                </AlertDialogCancel>
              </AlertDialogHeader>
            </AlertDialogContent>
          )}
        </AlertDialog>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="text-[#FD543F] text-[24px] font-semibold">{foodName}</p>
        <p className="text-[18px] font-semibold">${`${price}`}</p>
      </div>
      <div>
        <p className="text-[14px]">{ingredients}</p>
      </div>
    </div>
  );
};

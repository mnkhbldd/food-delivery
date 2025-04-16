import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type FoodType = {
  foodName: string;
  price: number;
  image: string | StaticImport;
  ingredients: string;
};

export const FoodPackage = ({
  foodName,
  price,
  image,
  ingredients,
}: FoodType) => {
  return (
    <div className="w-[397px] min-h-[342px] bg-white border rounded-[20px] p-[20px] h-fit">
      <Image
        height={210}
        width={365}
        className="rounded-[12px]"
        src={image ? image : "/images/food-package.png"}
        alt="Food package"
      ></Image>
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

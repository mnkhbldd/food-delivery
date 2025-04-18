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
import { Plus, X } from "lucide-react";
import { Button } from "./ui/button";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
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
      <div
        className="relative
      "
      >
        <Image
          height={210}
          width={365}
          className="rounded-[12px] w-[365px] h-[210px] object-cover "
          src={image}
          alt="Food package"
          unoptimized={true}
        ></Image>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="absolute w-[335px] h-[200px] top-1 left-3">
              <div className="absolute bg-white rounded-full p-2 right-2 bottom-2">
                <Plus className="text-[#EF4444] size-5" />
              </div>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-fit h-fit !max-w-fit">
            <AlertDialogHeader>
              <div className="flex gap-6">
                <Image
                  height={364}
                  width={367}
                  className="rounded-[12px] w-[367px] h-[364px] object-cover "
                  src={image}
                  alt="Food package"
                  unoptimized={true}
                ></Image>
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
                      <div className=" flex items-center gap-3">
                        <Button className="w-[44px] h-[44px] rounded-full bg-transparent text-black border border-black">
                          -
                        </Button>
                        <p className="text-[18px] font-semibold">1</p>
                        <Button className="w-[44px] h-[44px] rounded-full bg-transparent text-black border border-black">
                          +
                        </Button>
                      </div>
                    </div>
                    <AlertDialogAction className="rounded-full bg-[#18181B] h-[44px]">
                      Add to cart
                    </AlertDialogAction>
                  </div>
                </div>
              </div>
            </AlertDialogHeader>
            <AlertDialogFooter></AlertDialogFooter>
          </AlertDialogContent>
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

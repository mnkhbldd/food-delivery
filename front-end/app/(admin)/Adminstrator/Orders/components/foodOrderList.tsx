import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface FoodOrderListProps {
  email: string;
  number: number;
  totalPrice: string;
  address: string;
  createdAt: string;
  foods: any[];
}

export const FoodOrderList = ({
  email,
  number,
  foods,
  totalPrice,
  createdAt,
  address,
}: FoodOrderListProps) => {
  const slicedAddress = address.slice(0, 53);

  return (
    <div className="flex items-center justify-between border">
      <div className="p-4">
        <input type="checkbox"></input>
      </div>
      <p className="p-4">{number}</p>
      <p className="p-4">{email}</p>
      <Select>
        <SelectTrigger className="w-[180px] rounded-full px-2 border-none shadow-none">
          <SelectValue placeholder={`${foods.length} foods`} />
        </SelectTrigger>
        <SelectContent>
          {foods.map((food, index) => (
            <SelectItem
              className="flex gap-10"
              key={index}
              value={food.food.foodName}
            >
              <Image
                src={food.food.image}
                className="w-[50px] h-[50px] object-cover"
                height={50}
                width={50}
                alt={food.food.foodName}
              />
              {food.food.foodName} {food.quantity}x
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="w-[150px] p-4">{createdAt.slice(0, 10)}</p>
      <p className="p-4 w-[160px]">${totalPrice}</p>
      <p className="w-[300px] px-4 flex h-[42px]">{slicedAddress + "..."}</p>
      <Select defaultValue="PENDING">
        <SelectTrigger className="w-[180px] rounded-full px-2">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="PENDING">PENDING</SelectItem>
          <SelectItem value="DELIVERED">DELIVERED</SelectItem>
          <SelectItem value="CANCELLED">CANCELLED</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

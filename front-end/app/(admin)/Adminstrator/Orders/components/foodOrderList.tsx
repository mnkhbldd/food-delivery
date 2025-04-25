import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FoodOrderListProps {
  email: string;
  number: number;
  totalPrice: string;
  address: string;
  createdAt: string;
}

export const FoodOrderList = ({
  email,
  number,
  totalPrice,
  createdAt,
  address,
}: FoodOrderListProps) => {
  const slicedAddress = address.slice(0, 53);

  return (
    <div className="flex items-center justify-around border">
      <div className="p-4">
        <input type="checkbox"></input>
      </div>
      <p className="p-4">{number}</p>
      <p className="p-4">{email}</p>
      <Select>
        <SelectTrigger className="w-[180px] rounded-full px-2 border-none shadow-none">
          <SelectValue placeholder="2 Foods " />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">PENDING</SelectItem>
          <SelectItem value="dark">DELIVERED</SelectItem>
          <SelectItem value="system">CANCELLED</SelectItem>
        </SelectContent>
      </Select>
      <p className="w-[150px] p-4">{createdAt.slice(0, 10)}</p>
      <p className="p-4 w-[160px]">${totalPrice}</p>
      <p className="w-[300px] px-4 flex h-[42px]">{slicedAddress + "..."}</p>
      <Select>
        <SelectTrigger className="w-[180px] rounded-full px-2">
          <SelectValue defaultValue="PENDING" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">PENDING</SelectItem>
          <SelectItem value="dark">DELIVERED</SelectItem>
          <SelectItem value="system">CANCELLED</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

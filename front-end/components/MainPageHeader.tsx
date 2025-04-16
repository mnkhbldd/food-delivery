"use client";
import { ChevronRight, MapPin, ShoppingCart, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Textarea } from "./ui/textarea";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const MainPageHeader = () => {
  const deliveryInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [deliveryMockAddress, setDelvieryMockAddress] = useState("");

  const changeDeliveryLocation = () => {
    if (deliveryInputRef.current) {
      setDelvieryMockAddress(deliveryInputRef.current.value);
    }
  };

  //   const handleOnChange = () => {
  //     if (deliveryInputRef.current) {
  //       console.log(deliveryInputRef.current.value);
  //     }
  //   };

  return (
    <div className="bg-[#18181B] h-[68px] w-full flex items-center justify-between px-[88px] py-3 fixed z-9999 ">
      <div className="flex gap-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="38"
          viewBox="0 0 46 38"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.4661 0.596961C21.2291 0.833946 21.2203 0.885337 21.2426 1.92128C21.2552 2.51399 21.225 3.03945 21.1755 3.08878C21.1259 3.13812 20.6008 3.24912 20.0086 3.33526C17.4119 3.7133 15.2288 4.47496 12.9118 5.81142C11.2389 6.77639 10.332 7.45534 8.96201 8.7686C7.54568 10.1263 6.61075 11.3102 5.40645 13.2714C5.06061 13.8348 4.39556 15.153 4.39556 15.2755C4.39556 15.3006 4.28711 15.5584 4.15457 15.8482C3.40896 17.4783 2.74567 20.488 2.72169 22.3498C2.70515 23.6374 2.75654 23.5821 1.46795 23.6998C0.491915 23.7891 0.337253 23.8285 0.174956 24.0288C-0.0801388 24.3438 -0.0554713 24.687 0.243672 24.9862C0.494558 25.2371 0.506402 25.2387 1.58962 25.1752C2.19075 25.14 4.00401 25.0463 5.61916 24.967C7.2343 24.8877 9.32664 24.7791 10.2688 24.7257C12.9744 24.5724 13.6591 24.5371 15.0163 24.4814C16.351 24.4266 18.8048 24.2965 21.5258 24.1363C22.4142 24.084 23.7827 24.0181 24.567 23.9898C25.3513 23.9615 26.3424 23.9187 26.7695 23.8948C27.1966 23.8709 28.6031 23.8048 29.8952 23.7478C31.1873 23.6909 32.9493 23.6026 33.8107 23.5516C34.6721 23.5006 35.8835 23.4337 36.5026 23.4028C37.1217 23.3718 37.8926 23.3276 38.2156 23.3045C38.5387 23.2814 39.3536 23.2369 40.0266 23.2056C44.4149 23.0018 45.5977 22.9024 45.7989 22.7203C46.0619 22.4822 46.0683 21.8819 45.8102 21.6483C45.6521 21.5052 45.4529 21.4826 44.5388 21.5036C43.9425 21.5174 43.4225 21.4965 43.3831 21.4571C43.3438 21.4177 43.2376 20.8923 43.1471 20.2895C42.9636 19.0659 42.9276 18.8928 42.7262 18.2637C42.6486 18.0214 42.5337 17.625 42.471 17.3827C42.4082 17.1404 42.317 16.8657 42.2685 16.7723C42.2198 16.6788 42.1801 16.5524 42.1801 16.4916C42.1801 16.2622 41.2488 14.1867 40.7617 13.3304C40.1169 12.1971 39.5495 11.3245 39.2569 11.0166C39.1309 10.8838 38.9115 10.6211 38.7694 10.4327C38.1678 9.6347 36.9438 8.4117 35.9437 7.60912C35.1665 6.98538 33.0212 5.57287 32.3913 5.2702C29.6127 3.93502 27.0152 3.2502 24.2341 3.11981C23.3564 3.0786 22.9368 3.01977 22.8415 2.92453C22.7592 2.8423 22.7019 2.56655 22.6969 2.22992C22.6781 0.96257 22.6502 0.760824 22.4651 0.556337C22.2086 0.272953 21.7723 0.290671 21.4661 0.596961ZM13.6928 7.61842C13.6916 7.68577 13.5044 8.03336 13.2768 8.39104C12.6521 9.37236 11.4437 11.6416 11.4436 11.8338C11.4435 11.8777 11.3333 12.1543 11.1987 12.4486C11.0641 12.7428 10.954 13.0395 10.954 13.1079C10.954 13.1763 10.9131 13.2742 10.8631 13.3253C10.7311 13.4601 10.1131 15.9037 9.93589 16.9911C9.78377 17.924 9.72827 18.4796 9.63283 20.0256C9.54806 21.3974 9.29718 21.5874 7.53589 21.6143C6.16967 21.6351 5.92045 21.5303 5.67329 20.8308C5.48975 20.3114 5.61651 19.6268 6.25728 17.6763C6.78284 16.0768 6.8957 15.7949 7.45219 14.6908C8.33719 12.935 9.10825 11.76 10.2787 10.3837C11.8626 8.52123 13.7028 7.0307 13.6928 7.61842ZM27.2523 27.2417C25.6318 27.2809 21.3166 27.4782 19.1276 27.6133C17.3433 27.7234 16.5484 27.7677 13.8906 27.9058C12.3563 27.9853 10.5723 28.0934 9.9262 28.1459C9.28014 28.1983 7.49615 28.2899 5.96176 28.3493C4.42738 28.4088 3.11118 28.4772 3.03699 28.5014C2.89818 28.5466 2.90826 28.7064 3.11402 29.7165C3.26604 30.4633 3.6989 31.8915 3.90799 32.3364C4.01733 32.569 4.17747 32.9446 4.26381 33.1712C4.70479 34.3277 5.64842 35.9638 6.49838 37.0456C6.75749 37.3755 6.97676 37.6454 6.98566 37.6454C6.99457 37.6454 7.21932 37.5407 7.48518 37.4129C8.8421 36.7603 9.48022 36.4758 9.90966 36.3321C11.2996 35.8673 13.6228 35.5665 15.2076 35.6463C16.6816 35.7204 24.4092 35.7182 25.4903 35.6432C26.6211 35.5649 27.2861 35.431 27.9375 35.151C28.1528 35.0584 28.8136 34.7847 29.4058 34.5429C29.998 34.3011 30.5266 34.0684 30.5804 34.0256C30.6343 33.9828 31.1938 33.7243 31.8238 33.4511C32.4537 33.1779 33.0484 32.9108 33.1453 32.8577C33.3558 32.742 34.1206 32.3951 35.9642 31.579C36.718 31.2453 37.5549 30.8684 37.8241 30.7415C38.0933 30.6144 38.5778 30.3932 38.9009 30.2498C39.5464 29.9632 40.3375 29.5972 41.5624 29.0184C42.0034 28.8101 42.3916 28.6397 42.4252 28.6397C42.5646 28.6397 43.5374 28.1527 43.5998 28.0518C43.6371 27.9915 43.5861 27.8508 43.4867 27.7391C43.0455 27.2437 42.1856 27.1435 41.0477 27.4551C40.0669 27.7237 38.7366 28.1349 38.5093 28.2399C38.4016 28.2895 37.9611 28.4433 37.5304 28.5814C36.3337 28.9653 33.7049 29.8847 33.3465 30.0447C33.1711 30.123 32.8074 30.2614 32.5382 30.3524C32.269 30.4432 31.6082 30.6709 31.0699 30.8583C29.9959 31.2323 26.6929 31.939 25.5799 32.0332C24.7195 32.1059 24.4144 32.037 24.2092 31.7239C23.8544 31.1823 24.1202 30.434 24.7541 30.1895C25.0942 30.0582 26.4941 29.8184 26.9324 29.8161C27.2964 29.8144 29.5315 29.4575 30.92 29.1793C31.9009 28.9829 32.6325 28.6054 32.8271 28.1953C33.0174 27.7944 33.0165 27.7117 32.8183 27.4093L32.6581 27.1647L30.3956 27.1925C29.1514 27.2078 27.7368 27.2299 27.2523 27.2417Z"
            fill="#EF4444"
          />
        </svg>
        <div>
          <p className="text-white text-[20px] font-semibold">
            Nom<span className="text-[#EF4444]">Nom</span>
          </p>
          <p className="text-white text-[12px]">Swift delivery</p>
        </div>
      </div>
      <div className="flex items-center gap-[13px]">
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="flex items-center gap-3 bg-white rounded-full px-3 py-2">
              <MapPin className="text-[#EF4444]" />
              {deliveryMockAddress ? (
                <p className="text-[#EF4444]">{deliveryMockAddress}</p>
              ) : (
                <p className="text-[#EF4444]">
                  Delivery address:{" "}
                  <span className="text-[#71717A]">Add location</span>
                </p>
              )}

              <ChevronRight className="text-[#71717A]" />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader className="flex flex-col gap-[24px]">
              <AlertDialogDescription></AlertDialogDescription>
              <div className="flex justify-between items-center">
                {" "}
                <AlertDialogTitle>Delivery Address</AlertDialogTitle>
                <AlertDialogCancel className="rounded-full h-[36px] w-[36px] border-none bg-gray-200">
                  <X />
                </AlertDialogCancel>
              </div>
              <Textarea
                // onChange={handleOnChange}
                ref={deliveryInputRef}
                className="h-[112px]"
                placeholder="Please provide specific address details such as building number, entrance, and apartment number"
              />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-[#18181B]"
                onClick={changeDeliveryLocation}
              >
                Deliver Here
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button className="bg-white rounded-full w-[36px] h-[36px]">
          <ShoppingCart className="text-[#18181B]" />
        </Button>
        <Avatar className="w-[36px] h-[36px]">
          <AvatarImage src="" alt="@avatar" />
          <AvatarFallback className="bg-[#EF4444]">
            <User className="text-white" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { Currency, IconButton } from "@/components/components";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
    data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id);
    };

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data.images[0].url}
                    alt="Image"
                    className=" object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="relative flex flex-col gap-y-4">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {data.name}
                        </p>
                    </div>
                    <div className="mt-1 flex flex-col text-sm gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <div
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: data.color.value }}
                            />
                            <p className=" text-gray-500">{data.color.name}</p>
                        </div>
                        <p className=" text-gray-500">{data.size.name}</p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    );
};

export default CartItem;

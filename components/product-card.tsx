"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${data.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white group cursor-pointer rounded-xl space-y-4"
        >
            {/* Images and Actions */}
            <div className="aspect-square bg-gray-100 relative rounded-xl">
                <Image
                    src={data?.images[0]?.url}
                    alt="image"
                    fill
                    className="object-cover rounded-xl"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            icon={<Expand size={20} />}
                            className="text-gray-600"
                            onClick={onPreview}
                        />
                        <IconButton
                            icon={<ShoppingCart size={20} />}
                            className="text-gray-600"
                            onClick={onAddToCart}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <div className="flex items-center gap-x-1 text-gray-700 text-md">
                    <p>{data.size.name}</p>
                    <span className=" text-gray-400">|</span>
                    <p>{data.color.name}</p>
                </div>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data.price} />
            </div>
        </div>
    );
};

export default ProductCard;

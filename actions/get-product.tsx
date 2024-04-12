import { Product } from "@/types";

const URl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${URl}/${id}`, {
        cache: "no-store",
        mode: "no-cors",
    });

    return res.json();
};

export default getProduct;

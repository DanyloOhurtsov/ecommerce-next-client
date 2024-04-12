import qs from "query-string";
import { Product } from "@/types";

const URl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URl,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });
    const res = await fetch(url, {
        cache: "no-store",
        mode: "no-cors",
    });

    return res.json();
};

export default getProducts;

import { Category } from "@/types";

const URl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(URl, {
        cache: "no-store",
        mode: "no-cors",
    });

    return res.json();
};

export default getCategories;

import { Category } from "@/types";

const URl = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const res = await fetch(`${URl}/${id}`, {
        cache: "no-store",
        mode: "no-cors",
    });

    return res.json();
};

export default getCategory;

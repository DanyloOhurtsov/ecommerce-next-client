import { Color } from "@/types";

const URl = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URl, {
        cache: "no-store",
        mode: "no-cors",
    });

    return res.json();
};

export default getColors;

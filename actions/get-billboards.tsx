import { Billboard } from "@/types";

const URl = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URl}/${id}`, {
        cache: "no-store",
        mode: "no-cors",
    });

    return res.json();
};

export default getBillboard;

import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType;
}

const Billboard = ({ data }: BillboardProps) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
                className="rounded-xl relative aspect-[2/1] md:aspect-[3.5/1] overflow-hidden bg-no-repeat bg-cover bg-center"
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 backdrop-blur-xl bg-opacity-40 bg-black overflow-hidden rounded-xl">
                    <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
                        {data.label}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Billboard;

import {
    getCategory,
    getSizes,
    getProducts,
    getColors,
} from "@/actions/actions";

import NoResults from "@/components/ui/no-results";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductCard from "@/components/product-card";

import { Filter, MobileFilters } from "./_components/components";

interface CategoryPageProps {
    params: {
        categoryId: string;
    };
    searchParams: {
        colorId: string;
        sizeId: string;
    };
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        sizeId: searchParams.sizeId,
        colorId: searchParams.colorId,
    });

    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className=" mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {products.map((item) => (
                                    <ProductCard data={item} key={item.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryPage;

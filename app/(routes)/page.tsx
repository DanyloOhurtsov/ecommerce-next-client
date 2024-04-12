import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductsList from "@/components/products-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
    const billboard = await getBillboard(
        "4fd702af-ba36-4bf9-b666-2ed75d72cd3f"
    );
    const products = await getProducts({
        isFeatured: true,
    });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4">
                    <ProductsList
                        title={"Featured products"}
                        items={products}
                    />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;

import {
  ProductDetailsNotFoundSection,
  ProductDetailsSection,
} from "@/components";
import { productsData } from "@/data/products-data";

interface ProductDetailsPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { productId } = await params;
  const productData = productsData.find(
    (product) => product.id.toString() === productId
  );

  return (
    <section className="flex flex-col grow h-full w-full items-center justify-center">
      {productData ? (
        <ProductDetailsSection productData={productData} />
      ) : (
        <ProductDetailsNotFoundSection />
      )}
    </section>
  );
}

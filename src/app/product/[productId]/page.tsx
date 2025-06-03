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

  const containerClassName =
    "flex flex-col h-screen w-screen items-center justify-center";

  if (!productData) {
    return (
      <section className={containerClassName}>
        <ProductDetailsNotFoundSection />
      </section>
    );
  }

  return (
    <section className={containerClassName}>
      <ProductDetailsSection productData={productData} />
    </section>
  );
}

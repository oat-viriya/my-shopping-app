import { productsData } from "@/data/products-data";
import { ProductCard } from "../components";

export default async function HomePage() {
  return (
    <section className="auto-rows-auto min-h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
      {productsData.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </section>
  );
}

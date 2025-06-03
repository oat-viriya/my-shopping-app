import { productsData } from "@/data/products-data";
import { ProductCard } from "../components";

export default async function HomePage() {
  return (
    <main className="flex flex-col gap-[32px] items-center container mx-auto justify-center sm:items-start p-8 sm:p-20">
      <section className="auto-rows-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {productsData.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </section>
    </main>
  );
}

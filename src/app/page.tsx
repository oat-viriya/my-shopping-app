import { productsData } from "@/data/products-data";
import { ProductCard } from "../components";

export default async function HomePage() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20 ">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
}

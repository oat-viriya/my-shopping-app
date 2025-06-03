interface ProductDetailsPageProps {
  params: Promise<{ productId: string }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { productId } = await params;

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1>{`This is Product details page for product id: ${productId}`}</h1>
    </div>
  );
}

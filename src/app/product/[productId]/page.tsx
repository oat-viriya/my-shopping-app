interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const productId = await params.productId;
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1>{`This is Product details page for product id: ${productId}`}</h1>
    </div>
  );
}

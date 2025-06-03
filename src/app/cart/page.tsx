interface CartPageProps {}

export default async function CartPage(props: CartPageProps) {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1>{`This is Cart Page`}</h1>
    </div>
  );
}

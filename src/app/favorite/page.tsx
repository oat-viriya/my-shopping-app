interface FavoritePageProps {}

export default async function FavoritePage(props: FavoritePageProps) {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1>{`This is Favorite Page`}</h1>
    </div>
  );
}

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { ROUTES } from "@/constants";

const navbarLinks = [
  {
    title: "Products",
    href: ROUTES.HOME,
  },
  {
    title: "Cart",
    href: ROUTES.CART,
  },
  {
    title: "Favorites",
    href: ROUTES.FAVORITE,
  },
];

export default function NavigationBar() {
  return (
    <NavigationMenu className="grow-0 h-fit sticky top-0 z-50 font-medium xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm">
      <NavigationMenuList className="w-screen bg-white py-2 px-6 flex items-center justify-end">
        {navbarLinks.map((link) => (
          <NavigationMenuItem key={link.title}>
            <NavigationMenuLink asChild>
              <Link href={link.href}>{link.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

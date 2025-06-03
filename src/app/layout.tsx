import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context";
import { FavoriteListProvider } from "@/contexts/favorite-context";
import NavigationBar from "@/components/layout/navigation-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Shopping App",
  description: "My shopping app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col font-[family-name:var(--font-geist-sans)]`}
      >
        <CartProvider>
          <FavoriteListProvider>
            <NavigationBar />
            <main className="flex flex-col grow gap-[32px] items-center container mx-auto justify-center sm:items-start p-8 sm:p-20 overflow-auto min-h-fit">
              {children}
            </main>
          </FavoriteListProvider>
        </CartProvider>
      </body>
    </html>
  );
}

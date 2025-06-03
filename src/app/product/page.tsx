import { ROUTES } from "@/constants";
import { redirect } from "next/navigation";

export default async function ProductPage() {
  // If no productId is provided, redirect to home page
  redirect(ROUTES.HOME);
}

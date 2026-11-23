import Hero from "./_components/Hero";
import OurProduct from "./_components/OurProduct";
import { Suspense } from "react";

export const metadata = {
  title: "Export Products | Shahiking",
  description: "Explore Shahiking spices, seasonings, and healthy food products for export.",
};

export default function ExportProductsPage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}><OurProduct /></Suspense>
    </>
  );
}

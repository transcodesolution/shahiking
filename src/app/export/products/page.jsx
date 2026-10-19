import Hero from "./components/Hero";
import OurProduct from "./components/OurProduct";

export const metadata = {
  title: "Export Products | Shahiking",
  description: "Explore Shahiking spices, seasonings, and healthy food products for export.",
};

export default function ExportProductsPage() {
  return (
    <>
      <Hero />
      <OurProduct />
    </>
  );
}

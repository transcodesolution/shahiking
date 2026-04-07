import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Healthy Bites | Fresh & Nutritious Food Delivered",
  description: "Discover delicious healthy meals, recipes, and fresh food options crafted for a better lifestyle. Order nutritious   dishes and explore a variety of wholesome recipes.",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

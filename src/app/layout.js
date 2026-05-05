import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import ToastProvider from "@/components/common/ToastProvider";
import Script from "next/script";

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1882HQ0N75"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1882HQ0N75');
          `}
        </Script>
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>

        <ToastProvider/>
      </body>
    </html>
  );
}

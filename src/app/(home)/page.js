import React from "react";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import ShopByCategory from "./components/ShopByCategory";
import WhatIsShahiking from "./components/WhatIsShahiking";
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <WhatIsShahiking />
      <ShopByCategory />
      <WhyChooseUs />
      <Recipes />
      <FAQ />
      <Testimonials/>
      <GetInTouch />
    </React.Fragment>
  );
}

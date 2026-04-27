import React from "react";
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";
import Hero from "./components/Hero";
import OurRecipe from "./components/OurRecipe";

export default function page() {
  return (
    <React.Fragment>
      <Hero />
      <OurRecipe />
      <Testimonials bg="bg-white" />
      <GetInTouch />
    </React.Fragment>
  );
}

import React from "react";
import Hero from "./components/Hero";
import WhyOurPartner from "./components/WhyOurPartner";
import PackagingOptions from "./components/PackagingOptions";
import CustomProductSolution from "./components/CustomProductSolution";
import GlobalMarkets from "./components/GlobalMarkets";
import OurExportProcess from "./components/OurExportProcess";
import GetInTouch from "./components/GetInTouch";
import GlobalDeliveryPartner from "./components/GlobalDeliveryPartner";
import ExploreProducts from "./components/ExploreProducts";
import RealStories from "./components/RealStories";
import Testimonial from "./components/Testimonial";

export default function page() {
  
  return (
    <React.Fragment>
       <Hero/>
       <ExploreProducts/>
       <WhyOurPartner/>
       <CustomProductSolution />
       <PackagingOptions />
       <GlobalMarkets />
       <GlobalDeliveryPartner />
       <OurExportProcess />
       <RealStories />
       <Testimonial />
       {/* <GetInTouch /> */}
    </React.Fragment>
  );
}
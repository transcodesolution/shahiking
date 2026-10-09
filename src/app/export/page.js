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
       <GetInTouch />
    </React.Fragment>
  );
}
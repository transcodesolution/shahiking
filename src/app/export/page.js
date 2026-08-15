import React from "react";
import Hero from "./components/Hero";
import WhyOurPartner from "./components/WhyOurPartner";
import PackagingOptions from "./components/PackagingOptions";
import CustomProductSolution from "./components/CustomProductSolution";
import GlobalMarkets from "./components/GlobalMarkets";
import OurExportProcess from "./components/OurExportProcess";
import GetInTouch from "./components/GetInTouch";
import GlobalDeliveryPartner from "./components/GlobalDeliveryPartner";

export default function page() {
  
  return (
    <React.Fragment>
       <Hero/>
       <WhyOurPartner/>
       <PackagingOptions />
       <CustomProductSolution />
       <GlobalMarkets />
       <OurExportProcess />
       <GetInTouch />
       <GlobalDeliveryPartner />
    </React.Fragment>
  );
}
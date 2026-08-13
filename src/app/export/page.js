import React from "react";
import Hero from "./components/Hero";
import WhyOurPartner from "./components/WhyOurPartner";
import PackagingOptions from "./components/PackagingOptions";

export default function page() {
  
  return (
    <React.Fragment>
       <Hero/>
       <WhyOurPartner/>
       <PackagingOptions />
    </React.Fragment>
  );
}
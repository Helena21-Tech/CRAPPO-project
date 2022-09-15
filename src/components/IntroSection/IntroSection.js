import React from "react";
import classes from "./IntroSection.module.css";
import IntroContent from "./IntroContent";
import SubGrid from "./SubGrid";
import Reason from "./Reason";
import HowTo from "./HowTo";
import MainNavigation from "../Header/MainNavigation";

const IntroSection = ()=>{
return (
  <section className={classes.section}>
    <MainNavigation />
    <IntroContent />
    <SubGrid />
    <Reason />
    <HowTo />
  </section>
)
}

export default IntroSection;
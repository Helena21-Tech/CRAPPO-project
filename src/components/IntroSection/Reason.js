import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";
import classes from "./Reason.module.css";
import WhyImg from "../../images/why-img.png";
import Button from "../Button/Button";
import WhyModel from "../../images/why-model-1.png";
import WhyMode from "../../images/why-model-2.png";
import WhyRibbon from "../../images/why-ribbon.png";
const Reason = () => {
  return (
    <div className={classes.why}>
      <img src={WhyModel} alt="model-1" className={classes.model} />
      <img src={WhyMode} alt="model-2" className={classes.model1} />
      <img src={WhyRibbon} alt="ribbon" className={classes.ribbon} />
      <AnimationOnScroll animateIn={classes.content}>
       <div className={classes.content}>
        <h2> Why you should choose CRAPPO</h2>
        <p>
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees and take a review.
        </p>
        <Button action="Learn more" />
      </div> 
      </AnimationOnScroll>
      <AnimationOnScroll animateIn={classes.image}>
       <div className={classes.image}>
        <img src={WhyImg} alt="Structure"></img>
      </div> 
      </AnimationOnScroll>
    </div>
  );
};

export default Reason;

import React from "react";
import classes from "./HowTo.module.css";
import Form from "../Form/Form";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components/AnimationOnScroll";

const HowTo  =()=>{
return (
  <AnimationOnScroll animateIn={classes.heading}>
    <div className={classes.heading}>
    <h2>Check how much you can earn</h2>
    <p>Lets check your hash rate to see how much you will earn today. <br/>Exercitation veniam consequant sunt nostrud amet.</p>
    <Form />
  </div>
  </AnimationOnScroll>
  
)
}

export default HowTo;
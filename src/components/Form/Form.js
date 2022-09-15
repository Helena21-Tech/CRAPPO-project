import React from "react";
import Button from "../Button/Button";
import classes from "./Form.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components/AnimationOnScroll";

const Form = ()=>{
return (
  <AnimationOnScroll animateIn={classes.container}>
    <div className={classes.container}>
    <form>
      <input type="text" id="rate" placeholder="Enter your hash rate" />
      <select name="rate" id="currency">
        <option value="TH/S">TH/S</option>
        <option value="H/S">H/S</option>
        <option value="KH/S">KH/S</option>
        <option value="MH/S">MH/S</option>
        <option value="GH/S">GH/S</option>
      </select>
      <Button action="Calculate" />
    </form>
    <div className={classes.content}>
     <h4>Estimated 24Hour Revenue</h4>
    <div>0.055 130 59 ETH <span>($1275)</span></div>
    <p>Revenue will change based on mining difficulty & ethereum price.</p> 
    </div>
  </div>
  </AnimationOnScroll>
  
);
}

export default Form;
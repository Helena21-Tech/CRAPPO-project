import React from "react";
import classes from "./IntroContent.module.css";
import heroImg from "../../images/hero-img.png";
import { FaCaretRight } from "react-icons/fa";
const IntroContent = ()=>{
  return (
    <div className={classes.heroPage}>
      <div className={classes.content}>
        <div className={classes.discount}>  <span>75% SAVE</span> For the Black Friday Weekend </div>
        <div className={classes.text}>
         <h1>Fastest & Secure Platform To Invest In Crypto</h1>
         <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p> 
        </div>
        <button className={classes.heroBtn}> Try for FREE<span> <FaCaretRight style={{
          color:"#3671e9",
          margin: "1.2rem 1rem"
        }} /> </span> </button>
      </div>
      <div className={classes.image}>
        <img src={heroImg} alt="Hero" />
      </div>
    </div>
  )
}

export default IntroContent;
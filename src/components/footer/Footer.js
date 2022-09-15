import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../images/logo.svg";
import Visa from "../../images/visa.png";
import Mastercard from "../../images/mastercard.png";
import Bitcoin from "../../images/bitcoin.png";
import Copyright from "./Copyright";

const quickLists = ["Home", "Products", "About", "Features", "Contact"];
const resourceLinks = ["Download Whitepapper", "Smart Token", "Blockchain Explore", "Crypto API", "Interest"];
const Footer =()=>{
return (
  <footer className={classes.footer}>
    <img src={Logo} alt="Logo" />
    <div>
      <h5>Quick Links</h5>
      <ul>
        {quickLists.map((list)=>{
        return  <li>{list}</li>
        })}
      </ul>
    </div>
    <div>
      <h5>Resource Links</h5>
      <ul>
        {resourceLinks.map((list)=>{
       return <li>{list}</li>
      })}
      </ul>
    </div>
    <div>
      <h5>We accept the following payment system</h5>
      <div className={classes.payment}>
        <img src={Visa} alt=""/>
        <img src={Mastercard} alt="" />
        <img src={Bitcoin} alt="" />
      </div>
    </div>
    <Copyright />
  </footer>
);

}

export default Footer;
import React from "react";
import classes from "./Nav.module.css";
import { AiOutlineClose } from "react-icons/ai";
const Nav = (props)=>{
return (
  <div
    className={`${classes.nav} ${
      props.mobNav ? classes.mobNav : classes.desNav
    } `}
  >
    <button className={classes.hamburger} onClick={props.onClick}>
      <AiOutlineClose />
    </button>
    <ul className={classes.list}>
      <li>
        <a href="/">products</a>
      </li>
      <li>
        <a href="/">Features</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
    <div className={classes.btn}>
      <button className={classes.btnLog}> Login </button>
      <button className={classes.btnReg}> Register </button>
    </div>
  </div>
);
}

export default Nav;
import React from "react";

import classes from "./Button.module.css";

const Button = (props)=>{
  return (
    <button className={`${classes.button} ${props.work ? classes.btnNews : classes.btnNormal} ${props.children ? classes.activeBtn : ""}`}> {props.action} {props.children} </button>
  )
}

export default Button;
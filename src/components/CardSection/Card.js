import React, { Fragment } from "react";
import classes from "./Card.module.css";

const Card = (props)=>{

return (
  <Fragment>
    {!props.activeCard && (
      <div key={props.key} className={`${classes.card} ${classes.inactive}`} onClick={props.onClick}>
        {props.children}
      </div>
    )}
    {props.activeCard && (
      <div key={props.key} className={`${classes.card} ${classes.active}`} onClick={props.onClick}>
        {props.children}
      </div>
    )}
  </Fragment>
);
}

export default Card;
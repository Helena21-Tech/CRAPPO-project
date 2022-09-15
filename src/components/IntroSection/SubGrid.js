import React from "react";
import classes from "./SubGrid.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import { FiBarChart2 } from "react-icons/fi";
import { MdNetworkLocked } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const styles = {
    color: "#3671E9",
    fontSize: "6rem",
    margin: "0.7rem 1rem"

  }
const gridContent = [
  {
    iconStyle: {
      iconTitle: <FiBarChart2 style= {styles} />,
    },
    heading: "$30B",
    text: "Digital Currency Exchange",
  },
  {
    iconStyle: {
      iconTitle: <MdNetworkLocked style= {styles}/>,
    },
    heading: "190+",
    text: "Countries Around The World",
  },
  {
    iconStyle: {
      iconTitle: <FaUser style= {styles}/>,
    },
    heading: "$10M",
    text: "Trusted Wallet Investors",
  },
];
const SubGrid = ()=>{
  
  return (
    <div className={classes.sub}>
     {
      gridContent.map((content)=>{
      return (
      <AnimationOnScroll animateIn={classes.item}>
        <div className={classes.item}>
        <span>{content.iconStyle.iconTitle}</span>
        <div className={classes.itemContent}>
          <h4>{content.heading}</h4>
          <p>{content.text}</p> </div>
        </div>
      </AnimationOnScroll>)
      })
     }
    </div>
  )
}

export default SubGrid;
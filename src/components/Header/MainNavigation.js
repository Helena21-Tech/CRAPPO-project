import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import logo from "../../images/logo.svg";
import {FiMenu} from "react-icons/fi";
import Nav from "./Nav";
const MainNavigation = ()=>{
  const [showNav, setShowNav] =  useState(false);

  const showNavHandler = ()=>{
    setShowNav(true);
  }
  const closeBarHandler = ()=>{
    setShowNav(false);
  }
return (
  <header className={classes.header}>
    {!showNav && <img src={logo}  alt="Crappo Logo"/>}
    <div className={classes.mainNav}>
    {!showNav && (
      <button className={classes.hamburger} onClick={showNavHandler}>
        <FiMenu />
      </button>
    )}
    {!showNav && <Nav desNav="yes" />}
    { showNav && <Nav onClick={closeBarHandler} mobNav="yes" />}
  </div>
  </header>
  
);
}

export default MainNavigation;
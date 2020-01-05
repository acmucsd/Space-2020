import React, { useState, useEffect } from "react";
import "./style.less";
import rocket from "../../assets/mini-rocket.svg";
import rocketMobile from "../../assets/mini-rocket-mobile.svg";
import hamburger from "../../assets/menu-icon.svg";

const expand = () => {
  if(document.getElementsByClassName('navbar-ul')[0].classList.contains('expand')) {
    document.getElementsByClassName('navbar-ul')[0].classList.remove('expand');
  } else {
    document.getElementsByClassName('navbar-ul')[0].classList.add('expand');
  }
}

const Navbar: React.FC = () => {

  return (
    <nav className="navbar navbar-expand">
        <a href="#" className="navbar-brand navbar-item">
            <img src={rocket} className="brand-img" alt="SPACE rocket brand"/>
            <img src={rocketMobile} className="brand-img-mobile" alt="SPACE rocket brand mobile"/>
        </a>

        <div className="navbar-item menu-icon" onClick={expand}>
            <img src={hamburger}/>
        </div>

        <ul className="navbar-ul">
            <li className="navbar-li navbar-item"><a href="#">About</a></li>
            <li className="navbar-li navbar-item"><a href="#">Sponsors</a></li>
            <li className="navbar-li navbar-item"><a href="#">FAQ</a></li>
            <li className="navbar-li navbar-item"><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;

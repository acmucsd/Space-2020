import React, { useState, useEffect } from "react";
import "./style.less";
import rocket from "../../assets/mini-rocket.svg";
import hamburger from "../../assets/menu-icon.svg";

const Navbar: React.FC = () => {

  return (
    <nav className="navbar navbar-expand">
        <a href="#" className="navbar-brand navbar-item">
            <img src={rocket} alt="SPACE-rocket-brand"/>
        </a>

        <div className="navbar-item menu-icon">
            <img src={hamburger}/>
        </div>

        <ul>
            <li className="navbar-list navbar-item"><a href="#">About</a></li>
            <li className="navbar-list navbar-item"><a href="#">Sponsors</a></li>
            <li className="navbar-list navbar-item"><a href="#">FAQ</a></li>
            <li className="navbar-list navbar-item"><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;

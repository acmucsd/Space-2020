import React, { useState, useEffect } from "react";

import "./style.less";

const Navbar: React.FC = () => {

  return (
    <nav className="navbar navbar-expand">
        <a href="#" className="navbar-brand navbar-item"></a>
        
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

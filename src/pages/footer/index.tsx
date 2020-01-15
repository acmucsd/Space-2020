import React from "react";
import "./style.less";
import email from "../../assets/email.svg";
import facebook from "../../assets/facebook.svg";
import medium from "../../assets/medium.svg";
import space from "../../assets/space.svg";

const Footer: React.FC = () => {
  return (
    <div className="page" id="footer">
      <img src={space} alt="Space" />
      <div className="links">
        <a href="mailto:acm@ucsd.edu">
          <img className="link" src={email} alt="Email" />
        </a>
        <a href="https://www.facebook.com/acmucsd/">
          <img className="link" src={facebook} alt="Facebook" />
        </a>
        <a href="https://medium.com/acmucsd">
          <img className="link" src={medium} alt="Medium" />
        </a>
      </div>
      <p className="footer-font">© UCSD ACM 2019-2020</p>
    </div>
  );
};

export default Footer;
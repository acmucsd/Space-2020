import React from "react";
import "./style.less";
import rocket from "../../assets/mini-rocket.svg";
import rocketMobile from "../../assets/mini-rocket-mobile.svg";
import hamburger from "../../assets/menu-icon.svg";

interface NavProps extends React.Props<any> {
  labels: Array<string>;
  targets: Array<string>;
}

const expand = () => {
  if(document.getElementsByClassName('navbar-ul')[0].classList.contains('expand')) {
    document.getElementsByClassName('navbar-ul')[0].classList.remove('expand');
  } else {
    document.getElementsByClassName('navbar-ul')[0].classList.add('expand');
  }
}

const Navbar: React.FC<NavProps> = ({labels, targets}) => {

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
            {
              labels.map((label, i) => {
                return (
                  <li className="navbar-li navbar-item" key={i}><a href={targets[i]}>{label}</a></li>
                )
              })
            }
        </ul>
    </nav>
  );
};

export default Navbar;

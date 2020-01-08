import React from 'react';
import Button from '../../components/button/index';
import "./style.less";
import title from "../../assets/title.svg";
import mobileImg from "../../assets/astro.svg";

const Page1: React.FC = () => {
  return (
    <div className="page page1">
      <div className="page1-content">
        <div className="banner-img-container"><img src={title} alt="SPACE"/></div>
        <h1>StartuP: ACM's Career Expo</h1>
        <div className="info">
          <p>Price Center West Ballroom</p>
          <p>March 9th, 2020 @ 10am-6pm</p>
        </div>
        <div className="mobile-image"><img src={mobileImg} alt="astronaut"/></div>
        <Button/>
      </div>
      
    </div>
  );
};

export default Page1;

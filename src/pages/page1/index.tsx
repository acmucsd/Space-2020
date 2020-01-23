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
        <div className="button-div">
          <Button
            title="Student Registration"
            link="https://docs.google.com/forms/d/e/1FAIpQLScakibzfhXDbY-IEQ0g3nwwS_eNsQzgHmDZwBiXL0l82N712A/viewform?usp=sf_link"
          />
          <Button
            title="Company Registration"
            link="https://events.eventzilla.net/e/space--uc-san-diego-2138781014"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Page1;

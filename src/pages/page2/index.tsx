import React from "react";
import "./style.less";
import data from "./stats.json";

import Statistic, {StatisticMobile} from "../../components/statistic";
import Typing from "../../components/typing-text";

import astro from "../../assets/astro-greet.svg";

const Page2: React.FC = () => {
  return (
    <div className="page page2">
      <a className="anchor" id="about"></a>
      <div className="stats">
        <div>
          { data.stats.map(data => {
              return <Statistic number={data.number} group={data.name} />
            })
          }
          </div>
        </div>
        <div className="typer">
          <Typing />
        </div>
        <div className="body-text">
          <p className="desc">
            SPACE is UCSD ACM’s annual student-run startup career expo, where we
            invite local startup companies to come to UCSD and connect with our
            students. Whether you’re a company recruiter looking for potential
            interns, or a student looking to learn about local startups, SPACE is
            the place to be!
            <br />
            <br />
            If you're a company and you're interested in attending SPACE 2020, please email <a href="mailto:acm@ucsd.edu?subject=Interest%20in%20attending%20SPACE%202020&body=Hi%20there!%20">acm@ucsd.edu</a>
            <br />
            <br />
            SPACE will be held March 9th 2020.
          </p>
          <img className="astro" src={astro} alt="astro" />
        </div>
    </div>
  );
};

export default Page2;

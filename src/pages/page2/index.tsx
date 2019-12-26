import React from "react";
import "./style.less";

import Statistic from "../../components/statistic";

const Page2: React.FC = () => {
  return (
    <div className="page2">
      <div className="stats">
        <Statistic number="600+" group="Students" />
        <Statistic number="25" group="Companies" />
        <Statistic number="3" group="Cats" />
        <Statistic number="1" group="Dog" />
      </div>
    </div>
  );
};

export default Page2;

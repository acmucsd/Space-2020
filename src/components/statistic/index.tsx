import React from 'react';
import './style.less';

type StatProps = {
  number: string,
  group: string
}

const Statistic: React.FC<StatProps> = ({number, group}) => {
  return (
    <div className="statistic">
      <h1>{number}</h1>
      <p>{group}</p>
    </div>
  );
}


const StatisticMobile: React.FC = () => {
  return (
    <div className="statistic">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default Statistic;
export { StatisticMobile };

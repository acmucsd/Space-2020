import React from 'react';
import Button from '../components/button/index';

const Page1: React.FC = () => {
  return (
    <div className="page1">
      <div className="banner-img-container"></div>
      <h1>StartuP: ACM's Career Expo</h1>
      <div>
        <p>Price Center West Ballroom</p>
        <p>March 9th, 2020 @ 10am-6pm</p>
      </div>
      <Button/>
    </div>
  );
}

export default Page1;

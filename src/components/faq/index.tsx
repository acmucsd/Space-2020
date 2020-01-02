import React from 'react';
import './style.less';

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <div className="faq-header">
        <h1>FAQs</h1>
      </div>
      <div className="faq-body">
        <div className="break"></div>
        <button className="accordion">Where can I find more info?<div className="symbol"><img src="/arrow.png"/></div></button>
        <div className="panel">
          <p>Content</p>
        </div>
        <div className="break"></div>
        <button className="accordion">Should I bring my resume?<div className="symbol"><img src="/arrow.png"/></div></button>
        <div className="panel">
          <p>We will be collecting resumes for distribution digitally, but some companies may accept physical copies!</p>
        </div>
        <div className="break"></div>
        <button className="accordion">Will there be free swag?<div className="symbol"><img src="/arrow.png"/></div></button>
        <div className="panel">
          <p>Content</p>
        </div>
        <div className="break"></div>
        <button className="accordion">Will the event be on Handshake?<div className="symbol"><img src="/arrow.png"/></div></button>
        <div className="panel">
          <p>Content</p>
        </div>
        <div className="break"></div>
      </div>
    </div>
  );
}

export default FAQ;

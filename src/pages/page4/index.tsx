import React from 'react';
import Tabs from '../../components/tabs/index';
import FAQ from '../../components/faq/index';
import "./style.less";

const Page4: React.FC = () => {
  return (
    <div id="faq" className="page page4">
      <h2>FAQs</h2>
      <Tabs initialTab="Test1" tabList={["For Students", "For Companies"]}>
      <FAQ 
        panelTitles={["Where can I find more info?", "Should I bring my resume?", "Will there be free swag?", "Will the event be on Handshake?"]} 
        panelContents={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "We will be collecting resumes for distribution digitally, but some companies may accept physical copies!", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]}
      />
      <FAQ 
        panelTitles={["Where can I find more info?", "How many recruiters should attend?", "Are there sponsorship tiers?", "Will food and parking be provided?"]} 
        panelContents={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ]}
      />
      </Tabs>
    </div>
  );
}

export default Page4;

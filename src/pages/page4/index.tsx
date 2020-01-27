import React from 'react';
import Tabs from '../../components/tabs/index';
import FAQ from '../../components/faq/index';
import faqData from "./faq.json";

import "./style.less";


const Page4: React.FC = () => {
  return (
    <div className="page page4">
      <a className="anchor" id="faq"></a>
      <h2>FAQs</h2>
      <Tabs initialTab="Test1" tabList={["For Students", "For Companies"]}>
      <FAQ
        panelTitles={faqData.students.map(faq => faq.question)}
        panelContents={faqData.students.map(faq => faq.answer)}
      />
      <FAQ
        panelTitles={faqData.companies.map(faq => faq.question)}
        panelContents={faqData.companies.map(faq => faq.answer)}
      />
      </Tabs>
    </div>
  );
}

export default Page4;

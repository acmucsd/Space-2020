import React from "react";
import Panel from "./panel";

import "./style.less";

interface FAQProps extends React.Props<any> {
  panelTitles: Array<string>;
  panelContents: Array<string>;
}

const FAQ: React.FC<FAQProps> = ({panelTitles, panelContents}) => {

  return (
    <div className="faq">
      {
        panelTitles.map((title, label) => {
          return ( <Panel
            panelTitle={title}
            key={label}
            panelContent={panelContents[label]}
          /> );
        })
      }
      <br/>
      For any additional questions or inquiries, please reach out to Adam Lee at <a href="mailto:a3lee@ucsd.edu">a3lee@ucsd.edu</a>
    </div>
  )
};

export default FAQ;

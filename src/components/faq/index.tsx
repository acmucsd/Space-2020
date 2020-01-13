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
            panelContent={panelContents[label]}
          /> );
        })
      }
    </div>
  )
};

export default FAQ;

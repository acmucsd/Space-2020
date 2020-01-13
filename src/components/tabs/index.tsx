import React, {useState} from 'react';
import Tab from './tab';
import './style.less';

interface TabsProps extends React.Props<any> {
  initialTab: string;
  tabList: Array<string>;
}

const Tabs: React.FC<TabsProps> = (props) => {

  const tabList = props.tabList;
  const children = React.Children.toArray(props.children);
  const [activeTab, setActiveTab] = useState(0);
  const onClickTab = (label:number) => {
      setActiveTab(label);
  }

  return (
    <div className="tabs">
      <ol className="tab-list">
        {
          children.map((child, label) => {
            if(child) {
              if(label == activeTab) {
                return (
                  <Tab
                    activeLabel={"tab-active"}
                    label={label}
                    onClickAction={onClickTab}
                    content={tabList[label]}
                  />
                );
              } else {
                return (
                  <Tab
                    activeLabel={""}
                    label={label}
                    onClickAction={onClickTab}
                    content={tabList[label]}
                  />
                );
              }
            }
          })
        }
      </ol>
      <div className="tab-content">
        {
          children.map((child, label) => {
              if (label != activeTab) {
                return undefined;
              }
              return child;
          })
        }
      </div>
    </div>
  );
}

export default Tabs;

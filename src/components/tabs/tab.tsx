import React from 'react';
import './style.less';

interface TabProps extends React.Props<any> {
    activeLabel: string;
    label: number;
    content: string;
    onClickAction: (label:number) => void;
}

const Tab: React.FC<TabProps> = ({activeLabel, label, onClickAction, content}) => {
  
  const onClickFunc = () => {
    onClickAction(label);
  }
  
  return (
    <div className={`tab ${activeLabel}`} onClick={onClickFunc}>{content}</div>
  );
}

export default Tab;

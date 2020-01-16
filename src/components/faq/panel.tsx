import React, { useState, useRef } from 'react';
import Arrow from '../../assets/arrow.png';
import './style.less';

interface PanelProps extends React.Props<any> {
  panelTitle: string;
  panelContent: string;
}

const Panel: React.FC<PanelProps> = ({ panelTitle, panelContent }) => {
  
  const [setActive, setActiveState] = useState('');
  const [height, setHeight] = useState('0px');
  const [margin, setMargin] = useState('0px');
  const [spin, setSpin] = useState('');
  const content = useRef<HTMLDivElement>(null);
  
  function togglePanel() {
    setActiveState(setActive === '' ? 'header-active' : '');
    toggleHeight();
  }
  
  function toggleHeight() {
    if(content.current == null) {
      console.log('error with faq panel height toggle');
    } else {
      setHeight(setActive === 'header-active' ? '0px' : `${content.current.scrollHeight + 30}px`);
      setMargin(setActive === 'header-active' ? '0px' : '12px 0px 30px 18px');
      setSpin(setActive === 'header-active' ? '' : 'spin');
    }
  }

  return (
    <div className='panel'>
      <button className={`header ${setActive}`} onClick={togglePanel}><span className={`arrow ${spin}`}><img alt="panel button" src={Arrow}/></span>{ panelTitle }</button>
      <div className='content' ref={content} style={{ maxHeight: `${height}`, margin: `${margin}` } } >
          <p dangerouslySetInnerHTML={{ __html: panelContent}}/>
      </div>
    </div>
  )
};

export default Panel;

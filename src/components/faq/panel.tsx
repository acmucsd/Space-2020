import React, { useState, useRef } from 'react';
import Typist from 'react-typist';

import './style.less';

interface PanelProps extends React.Props<any> {
    panelTitle: string;
    panelContent: string;
  }

const Panel: React.FC<PanelProps> = ({ panelTitle, panelContent }) => {
  
  const [setActive, setActiveState] = useState('');
  const [height, setHeight] = useState('0px');
  const content = useRef<HTMLDivElement>(null);
  
  function togglePanel() {
    setActiveState(setActive === '' ? 'header-active' : '');
    toggleHeight();
  }
  
  function toggleHeight() {
    if(content.current == null) {
      console.log('error');
    } else {
      setHeight(setActive === "header-active" ? "0px" : `${content.current.scrollHeight}px`);
      console.log(content.current.scrollHeight);
    }
  }

  return (
    <div className='panel'>
      <button className={`header ${setActive}`} onClick={togglePanel}>{ panelTitle }</button>
      <div className='content' ref={content} style={{ maxHeight: `${height}` }} >
          <p>{ panelContent }</p>
      </div>
    </div>
  )
/*
  return (
    <div className='typing'>
      {count ? (
        <Typist
          className='typing'
          avgTypingDelay={50}
          cursor={{ element: '▏' }}
          onTypingDone={() => setCount(0)}
        >
          <span>Shoot for the stars</span>
          <Typist.Backspace count={5} delay={3000} />
          <span>moon</span>
          <Typist.Backspace count={8} delay={2000} />
          <span>Mars</span>
          <Typist.Backspace count={4} delay={2000} />
          <span>the sun</span>
          <Typist.Backspace count={7} delay={2000} />
          <span>an ACM cat cafe</span>
          <Typist.Backspace count={15} delay={2000} />
          <span>gallons of boba</span>
          <Typist.Backspace count={19} delay={2000} />
          <span>
            your shot{' '}
            <span role='img' aria-label='wink'>
              😉
            </span>
          </span>
          <Typist.Backspace count={50} delay={2000} />
        </Typist>
      ) : (
        '‎‎ '
      )}
    </div>
  );
  */
};

export default Panel;

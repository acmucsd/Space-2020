import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import Panel from "./panel";

import "./style.less";

const FAQ: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <div className="faq">
      <Panel
        panelTitle="Where can I find more info??"
        panelContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Panel
        panelTitle="Should I bring my resume?"
        panelContent="We will be collecting resumes for distribution digitally, but some companies may accept physical copies!"
      />
      <Panel
        panelTitle="Will there be free swag?"
        panelContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  )
/*
  return (
    <div className="typing">
      {count ? (
        <Typist
          className="typing"
          avgTypingDelay={50}
          cursor={{ element: "▏" }}
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
            your shot{" "}
            <span role="img" aria-label="wink">
              😉
            </span>
          </span>
          <Typist.Backspace count={50} delay={2000} />
        </Typist>
      ) : (
        "‎‎ "
      )}
    </div>
  );
  */
};

export default FAQ;

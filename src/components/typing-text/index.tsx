import React, { useState, useEffect } from "react";
import Typist from "react-typist";

import "./style.less";

const Typing: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

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
};

export default Typing;

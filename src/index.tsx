import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.less";

import Page2 from "./pages/page2/";

const App: React.FC = () => {
  return (
    <div className="App">
      <Page2 />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

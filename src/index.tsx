import React from "react";
import ReactDOM from "react-dom";
import "./style.less";
import Page1 from './pages/page1';
import Page4 from './pages/page4';

const App: React.FC = () => {
  return (
    <div className="App">
      <p>Hello World!</p>
      <Page1/>
      <Page4/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

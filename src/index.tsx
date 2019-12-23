import React from "react";
import ReactDOM from "react-dom";
import "./style.less";

const App: React.FC = () => {
  return (
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

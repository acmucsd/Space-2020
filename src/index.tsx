import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "./style.less";
import Page1 from './pages/page1';
import Page4 from './pages/page4';
=======
import "./styles/style.less";

import Page1 from "./pages/page1/";
import Page2 from "./pages/page2/";
import Page3 from "./pages/page3/";
import Page4 from "./pages/page4/";
import Particle from "./components/particle-js";
>>>>>>> upstream/master

const App: React.FC = () => {
  return (
    <div className="App">
<<<<<<< HEAD
      <p>Hello World!</p>
      <Page1/>
      <Page4/>
=======
      <Particle />
      <div className="pages">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
>>>>>>> upstream/master
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

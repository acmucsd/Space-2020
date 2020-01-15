import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.less";

import Page1 from "./pages/page1/";
import Page2 from "./pages/page2/";
import Page3 from "./pages/page3/";
import Page4 from "./pages/page4/";
import Footer from "./pages/footer/";
import Particle from "./components/particle-js";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Particle />
      <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
<Navbar/>
      <div className="pages">
        <Page1 />
        <Page2 />
        {/* <Page3 />
        <Page4 /> */}
        <Footer />
      </div>
        </div>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

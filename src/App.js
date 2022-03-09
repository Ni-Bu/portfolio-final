import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import React, { useState } from "react";
import { useSpring, useChain } from "react-spring";

function App() {
  const [introAnimationChain, setIntroAnimationChain] = useState([]);
  useChain(introAnimationChain, [0, 0.4, 0.6, 0.8, 1]);
  const [inView, setInView] = useState({
    home: false,
    project: false,
    contact: false,
  });

  return (
    <div className="App">
      <div className="dummy-container"></div>
      <NavBar
        setAnimationChain={setIntroAnimationChain}
        useAnimation={useAnimation}
        inView={inView}
      />

      <Home
        setAnimationChain={setIntroAnimationChain}
        useAnimation={useAnimation}
        setInView={setInView}
      />

      <Project useAnimation={useAnimation} setInView={setInView} />

      <Contact useAnimation={useAnimation} setInView={setInView} />
    </div>
  );
}

const useAnimation = (ref, mTop, mRight, mBottom, mLeft) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      marginTop: mTop,
      marginRight: mRight,
      marginBottom: mBottom,
      marginLeft: mLeft,
    },
    to: {
      opacity: 1,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },
    ref: ref,
  });
  return spring;
};
export default App;

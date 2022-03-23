import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import React, { useState } from "react";
import { useSpring, useChain } from "react-spring";
import { CssBaseline, Container } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
function App() {
  const [introAnimationChain, setIntroAnimationChain] = useState([]);
  useChain(introAnimationChain, [0, 0.4, 0.6, 0.8, 1]);
  const [inView, setInView] = useState({
    home: false,
    project: false,
    contact: false,
  });
  let theme = createTheme({
    palette: {
      text: {
        mainColor: "#fa58b6",
        highlightColor: "#f800b6",
        mainFont: "'Roboto Mono', sans-serif",
        largeFontSize: "clamp(45px, 4.18vw, 5rem)",
        mediumFontSize: "clamp(25px, 2.5vw, 3rem)",
      },
      bg: {
        main: "#1a1a40",
        secondary: "#270082",
        fg1: "#700b97",
        fg2: "#b900ff",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <NavBar
        setAnimationChain={setIntroAnimationChain}
        useAnimation={useAnimation}
        inView={inView}
      />
      {/* <Container className="dummy-container"></Container> */}
      <main>
        <Home
          setAnimationChain={setIntroAnimationChain}
          useAnimation={useAnimation}
          inView={inView}
          setInView={setInView}
        />

        <Project useAnimation={useAnimation} setInView={setInView} />

        <Contact useAnimation={useAnimation} setInView={setInView} />
      </main>
    </ThemeProvider>
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
    config: { duration: 800 },
  });
  return spring;
};
export default App;

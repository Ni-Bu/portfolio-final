import React, { useEffect, useRef } from "react";
import { animated } from "react-spring";

function NavBar({ setAnimationChain, useAnimation, inView }) {
  const navRef = useRef();
  const navStyle = useAnimation(navRef, -100, 0, 0, 0);
  useEffect(() => {
    setAnimationChain((old) => [...old, navRef]);
  }, []);

  return (
    <div className="nav-container">
      <animated.div className="nav-bar" style={navStyle}>
        <a to="home" className="logo">
          Logo
        </a>
        <a className={inView.home ? "active" : ""} href="#home">
          Home
        </a>
        <div>|</div>
        <a className={inView.project ? "active" : ""} href="#project">
          Projects
        </a>
        <div>|</div>
        <a className={inView.contact ? "active" : ""} href="#contact">
          Contact
        </a>
      </animated.div>
    </div>
  );
}

export default NavBar;

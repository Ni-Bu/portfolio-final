import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { animated } from "react-spring";
import MobileNav from "./mobileNav";

function NavBar({ setAnimationChain, useAnimation, inView }) {
  const navRef = useRef();
  const navStyle = useAnimation(navRef, -100, 0, 0, 0);
  useEffect(() => {
    setAnimationChain((old) => [...old, navRef]);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: "576px" });
  return (
    <div className="nav-container">
      {!isMobile && (
        <animated.div className="nav-bar" style={navStyle}>
          {/* <a to="home" className="logo">
            Logo
          </a> */}
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
      )}
      {isMobile && <MobileNav />}
    </div>
  );
}

export default NavBar;

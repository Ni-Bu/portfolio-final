import React, { useEffect, useRef, useState } from "react";

import foreground1 from "../img/foreground1.png";
import hello from "../img/Hello.png";
import resume from "../img/icons8-resume-500.png";
import github from "../img/icons8-github.png";
import { animated } from "react-spring";
import { useInViewEffect } from "react-hook-inview";

function Home({ setAnimationChain, useAnimation, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useInViewEffect(
    ([entry], observer) => {
      setIsVisible(entry.isIntersecting);
      setInView((prevState) => ({
        ...prevState,
        home: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );

  const introTextRef = useRef();
  const introTextStyle = useAnimation(introTextRef, 0, 0, 0, -500);
  const introLinkRef = useRef();
  const introLinkStyle = useAnimation(introLinkRef, 0, 0, -100, 0);
  const foreground1Ref = useRef();
  const foreground1Style = useAnimation(foreground1Ref, 0, -200, 0, 0);
  const helloImageRef = useRef();
  const helloImageStyle = useAnimation(helloImageRef, 0, -200, 0, 0);

  useEffect(() => {
    setAnimationChain((old) => [
      ...old,
      introTextRef,
      introLinkRef,
      foreground1Ref,
      helloImageRef,
    ]);
  }, []);

  return (
    <div className="home" id="home" ref={ref}>
      <div className="intro-left-container">
        <div className="intro-text-container">
          <animated.div className="intro-text" style={introTextStyle}>
            Hello, my name is Muneeb. <br />I am a frontend developer.
          </animated.div>
        </div>
        <div className="intro-links">
          <animated.img
            src={resume}
            className="inner1"
            style={introLinkStyle}
            alt="resume icon"
          />
          <animated.img
            src={github}
            className="inner2"
            style={introLinkStyle}
            alt="github icon"
          />
        </div>
      </div>
      <div className="intro-right-container">
        <animated.img
          src={foreground1}
          className="child child-1"
          style={foreground1Style}
          alt="foreground for character to stand on"
        />
        <animated.img
          src={hello}
          className="child child-2"
          style={helloImageStyle}
          alt="a greeting image"
        />
      </div>
    </div>
  );
}

export default Home;

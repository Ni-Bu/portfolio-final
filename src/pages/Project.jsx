import React, { useState, useRef } from "react";
import foreground2 from "../img/foreground2.png";
import water from "../img/water-cooler.png";
import { useInViewEffect } from "react-hook-inview";
import { animated, useChain } from "react-spring";

function Project({ useAnimation, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  let animationChain;
  const ref = useInViewEffect(
    ([entry], observer) => {
      setIsVisible(entry.isIntersecting);
      setInView((prevState) => ({
        ...prevState,
        project: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );

  const foregroundRef = useRef();
  const foregroundStyle = useAnimation(foregroundRef, 0, 0, 0, -500);
  const waterRef = useRef();
  const waterStyle = useAnimation(waterRef, -200, 0, 0, 0);
  const buttonLeftRef = useRef();
  const buttonLeftStyle = useAnimation(buttonLeftRef, 0, 0, -200, 0);
  const buttonRightRef = useRef();
  const buttonRightStyle = useAnimation(buttonRightRef, 0, 0, -200, 0);

  animationChain = isVisible
    ? [foregroundRef, waterRef, buttonLeftRef, buttonRightRef]
    : [];

  useChain(animationChain, [0.4, 0.8, 1.1, 1.3]);
  return (
    <div className="project" ref={ref} id="project">
      <div className="image-container">
        <animated.img
          src={foreground2}
          className="inner2"
          alt="foreground for character to lean against"
          style={foregroundStyle}
        />

        <animated.img
          src={water}
          className="inner1"
          alt="a character leaning against a water cooler"
          style={waterStyle}
        />
      </div>
      <div className="content-container">
        <animated.div
          className="task-card"
          style={buttonLeftStyle}
          onClick={() =>
            window.open("https://github.com/Kaylinkk/task_page", "_blank")
          }
        >
          <div className="content">
            <div className="front">TaskNet</div>
            <div className="back">
              Helps organzing daily tasks one click at a time.
            </div>
          </div>
        </animated.div>
        <animated.div className="task-card" style={buttonRightStyle}>
          <div className="content">
            <div className="front">Resume</div>
            <div className="back">A simple online resume website.</div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Project;

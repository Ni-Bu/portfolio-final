import React, { useState, useRef } from "react";
import foreground2 from "../img/foreground2.png";
import water from "../img/water-cooler.png";
import { useInViewEffect } from "react-hook-inview";
import { animated, useChain } from "react-spring";
import TaskCard from "./../components/taskCard";

function Project({ useAnimation, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  let animationChain;

  const onFlip = () => {
    setIsFlipped((isFlipped) => !isFlipped);
  };

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
  const leftTaskCardRef = useRef();
  const leftTaskCardStyle = useAnimation(leftTaskCardRef, 0, 0, -200, 0);
  const rightTaskCardRef = useRef();
  const rightTaskCardStyle = useAnimation(rightTaskCardRef, 0, 0, -200, 0);

  animationChain = isVisible
    ? [foregroundRef, waterRef, leftTaskCardRef, rightTaskCardRef]
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
        <animated.div style={leftTaskCardStyle}>
          <TaskCard
            title="Tasknet"
            mainText="Helps organizing daily tasks one click at a time."
            buttonText="open"
          />
        </animated.div>
        <animated.div style={rightTaskCardStyle}>
          <TaskCard
            title="Resume"
            mainText="A simple online resume website."
            buttonText="open"
          />
        </animated.div>
      </div>
    </div>
  );
}

export default Project;

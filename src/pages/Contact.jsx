import React, { useState, useRef } from "react";
import bye from "../img/bye.png";
import { useInViewEffect } from "react-hook-inview";
import { animated, useChain } from "react-spring";

function Contact({ useAnimation, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  let animationChain;
  const ref = useInViewEffect(
    ([entry], observer) => {
      setIsVisible(entry.isIntersecting);
      setInView((prevState) => ({
        ...prevState,
        contact: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );

  const byeRef = useRef();
  const byeStyle = useAnimation(byeRef, -300, 0, 0, 0);
  const textRef = useRef();
  const textStyle = useAnimation(textRef, 0, 0, -300, 0);
  animationChain = isVisible ? [byeRef, textRef] : [];

  useChain(animationChain, [0.4, 0.8]);
  return (
    <div className="contact" id="contact" ref={ref}>
      <animated.div className="text-container" style={textStyle}>
        <div>
          Thanks for making it this far.
          <br /> Feel free to contact me at :
        </div>
        <div className="email">muhammadahmad9497@hotmail.com</div>
      </animated.div>
      <animated.img
        src={bye}
        className="image"
        alt="a character saying goodbye"
        style={byeStyle}
      />
    </div>
  );
}

export default Contact;

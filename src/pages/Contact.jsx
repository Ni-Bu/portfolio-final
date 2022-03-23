import React, { useState, useRef } from "react";
import bye from "../img/bye.png";
import { useInViewEffect } from "react-hook-inview";
import { animated, useChain } from "react-spring";
import { Box, Typography, Grid, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeConsumer } from "styled-components";
function Contact({ useAnimation, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  const [triggerAnim, setTriggerAnim] = useState(false);
  let checkOnce = true;
  const theme = useTheme();
  const ref = useInViewEffect(
    ([entry], observer) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting)
        if (checkOnce) {
          setTriggerAnim(true);
          checkOnce = false;
        }

      setInView((prevState) => ({
        ...prevState,
        contact: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0 auto",
      }}
      maxWidth={"lg"}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Slide
          direction="right"
          in={triggerAnim}
          {...(triggerAnim ? { timeout: 1500 } : {})}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexFlow: "column nowrap",
              justifyContent: "center",
            }}
            maxWidth={"70vw"}
          >
            <Typography variant="h4" textAlign={"center"}>
              Thanks for making it this far.Feel free to contact me at :
            </Typography>
            <Typography
              color={theme.palette.text.highlightColor}
              textAlign={"center"}
              sx={{ fontSize: theme.palette.text.emailFontSize }}
            >
              muhammadahmad9497@hotmail.com
            </Typography>
          </Grid>
        </Slide>
        <Slide
          direction="left"
          in={triggerAnim}
          {...(triggerAnim ? { timeout: 1500 } : {})}
        >
          <Grid item>
            <Box
              component={"img"}
              src={bye}
              alt="a character saying goodbye"
              sx={{ width: "clamp(250px, 25vw, 700px)" }}
            />
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
}

export default Contact;
// <div className="contact" id="contact" ref={ref}>
//   <animated.div className="text-container" style={textStyle}>
//     <span>Thanks for making it this far.Feel free to contact me at :</span>

//     <span className="email">muhammadahmad9497@hotmail.com</span>
//   </animated.div>
//   <animated.img
//     src={bye}
//     className="image"
//     alt="a character saying goodbye"
//     style={byeStyle}
//   />
// </div>

import React, { useRef, useState } from "react";

import foreground1 from "../img/foreground1.png";
import hello from "../img/Hello.png";
import { ReactComponent as Resume } from "../img/icons8-resume-500.svg";
import { ReactComponent as Github } from "../img/icons8-github.svg";
import pdf from "../assets/resume.pdf";
import { animated } from "react-spring";
import { useInViewEffect } from "react-hook-inview";
import { Typography, Grid, Slide, IconButton, Box, Fade } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

import { useTheme } from "@mui/material/styles";

function Home({ setAnimationChain, useAnimation, inView, setInView }) {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const [triggerAnim, setTriggerAnim] = useState(false);
  let checkOnce = true;
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
        home: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        id="home"
        ref={ref}
        maxWidth={"lg"}
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={8} alignSelf="center">
            {console.log("theme", theme.palette.text.mainFont)}
            <Slide
              direction="right"
              in={triggerAnim}
              {...(triggerAnim ? { timeout: 1500 } : {})}
            >
              <Typography
                variant="h2"
                align="center"
                fontFamily={theme.palette.text.mainFont}
                color={theme.palette.text.mainColor}
                sx={{ mb: "4vw" }}
              >
                Hello, my name is Muneeb. I am a frontend developer.
              </Typography>
            </Slide>
            <Slide
              direction="up"
              in={triggerAnim}
              {...(triggerAnim ? { timeout: 3000 } : {})}
              mountOnEnter
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 6,
                  justifyContent: "center",
                }}
              >
                <IconButton
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: "clamp(96px, 8%, 150px)",
                    height: "auto",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Resume />
                </IconButton>

                <IconButton
                  href="https://github.com/ni-bu"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: "clamp(96px, 8%, 150px)",
                    height: "auto",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Github />
                </IconButton>
              </Box>
            </Slide>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            <Box
              sx={{
                height: "100%",
                poistion: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Slide
                direction="left"
                in={triggerAnim}
                {...(triggerAnim ? { timeout: 1000 } : {})}
                mountOnEnter
              >
                <Box
                  component={"img"}
                  src={foreground1}
                  sx={{
                    position: "relative",
                    width: "clamp(400px, 15vw, 600px)",
                    top: "40%",
                  }}
                  alt="foreground for character to stand on"
                />
              </Slide>
              <Slide
                direction="down"
                in={triggerAnim}
                {...(triggerAnim ? { timeout: 2000 } : {})}
                mountOnEnter
              >
                <Box
                  component={"img"}
                  src={hello}
                  sx={{
                    position: "absolute",
                    width: "clamp(400px, 20vw, 700px);",
                  }}
                  alt="a greeting image"
                />
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;

import React, { useState, useRef } from "react";
import { useInViewEffect } from "react-hook-inview";
import { animated, useChain } from "react-spring";

import TaskCard from "./../components/taskCard";

import foreground2 from "../img/foreground2.png";
import tasknet_logo from "../img/Tasknet_logo.png";
import water from "../img/water-cooler.png";
import logo from "../img/logo.png";
import { Typography, Grid, Slide, IconButton, Box } from "@mui/material";

function Project({ useAnimation, setInView }) {
  const [isVisible, setIsVisible] = useState(false);

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
        project: entry.isIntersecting,
      }));
    },
    { threshold: 0.5 }
  );

  return (
    <Box id="project" ref={ref} height="100vh">
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid
          item
          xs={4}
          sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        >
          <Box
            sx={{
              mt: 15,
              height: "100vh",
            }}
          >
            <Slide
              direction="right"
              in={triggerAnim}
              {...(triggerAnim ? { timeout: 1000 } : {})}
            >
              <Box
                component={"img"}
                src={foreground2}
                alt="foreground for character to lean against"
                sx={{ position: "absolute" }}
              />
            </Slide>
            <Box sx={{ overflow: "hidden " }}>
              <Slide
                direction="right"
                in={triggerAnim}
                {...(triggerAnim ? { timeout: 2500 } : {})}
              >
                <Box
                  component={"img"}
                  src={water}
                  alt="a character leaning against a water cooler"
                  sx={{ position: "absolute" }}
                />
              </Slide>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          alignSelf="center"
          sx={{
            height: "100vh",
            display: "flex",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Slide
            direction="up"
            in={triggerAnim}
            {...(triggerAnim ? { timeout: 1000 } : {})}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
                gap: 4,
                // alignItem: "center",
              }}
            >
              <TaskCard
                title="Tasknet"
                mainText="Helps organizing daily tasks one click at a time."
                logo={tasknet_logo}
                buttonSiteText="Visit"
                buttonGithubText="Open"
                urlSite="https://tasknet.vercel.app/"
                urlGithub="https://github.com/Ni-Bu/tasknet"
              />

              <TaskCard
                title="Portfolio"
                mainText="A portfolio to showcase my projects and skills."
                logo={logo}
                buttonSiteText="Visit"
                buttonGithubText="Open"
                urlSite="https://muneeb.vercel.app/"
                urlGithub="https://github.com/Ni-Bu/portfolio-final"
              />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Project;
{
  /* <div className="project" ref={ref} id="project">
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
            logo={tasknet_logo}
            buttonSiteText="Visit"
            buttonGithubText="Open"
            urlSite="https://tasknet.vercel.app/"
            urlGithub="https://github.com/Ni-Bu/tasknet"
          />
        </animated.div>
        <animated.div style={rightTaskCardStyle}>
          <TaskCard
            title="Portfolio"
            mainText="A portfolio to showcase my projects and skills."
            logo={logo}
            buttonSiteText="Visit"
            buttonGithubText="Open"
            urlSite="https://muneeb.vercel.app/"
            urlGithub="https://github.com/Ni-Bu/portfolio-final"
          />
        </animated.div>
      </div>
    </div> */
}

import {
  AppBar,
  Container,
  Grow,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { animated } from "react-spring";
import MobileNav from "./mobileNav";
import { useTheme } from "@mui/material/styles";
import Contact from "../pages/Contact";
import Link from "@mui/material/Link";

function NavBar({ setAnimationChain, useAnimation, inView }) {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: "576px" });
  return (
    <Slide direction="down" in={true} {...(true ? { timeout: 1000 } : {})}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: "none",
        }}

        // elevation={4}
      >
        <Toolbar sx={{ justifyContent: "end" }}>
          {!isMobile && (
            <Container
              sx={{
                py: 1,
                my: 1,
                mx: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="h3"
                fontFamily={theme.palette.text.mainFont}
                color={theme.palette.text.mainColor}
                sx={{
                  opacity: 0.4,
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  opacity: inView.home ? 1 : 0.4,

                  borderBottom: inView.home ? "2px solid #fa58b6" : "none",
                }}
              >
                <Link
                  href="#home"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </Link>
              </Typography>
              <Typography
                variant="h3"
                fontFamily={theme.palette.text.mainFont}
                color={theme.palette.text.mainColor}
                sx={{ opacity: 0.4 }}
              >
                |
              </Typography>
              <Typography
                variant="h3"
                fontFamily={theme.palette.text.mainFont}
                color={theme.palette.text.mainColor}
                sx={{
                  opacity: 0.4,
                  "&:hover": {
                    transform: "scale(1.1)",
                  },

                  opacity: inView.project ? 1 : 0.4,

                  borderBottom: inView.project ? "2px solid #fa58b6" : "none",
                }}
              >
                <Link
                  href="#project"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Projects
                </Link>
              </Typography>
              <Typography
                variant="h3"
                fontFamily={theme.palette.text.mainFont}
                color={theme.palette.text.mainColor}
                sx={{ opacity: 0.4 }}
              >
                |
              </Typography>
              <Typography
                variant="h3"
                fontFamily={theme.palette.text.mainFont}
                color={theme.palette.text.mainColor}
                sx={{
                  opacity: 0.4,
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  opacity: inView.contact ? 1 : 0.4,

                  borderBottom: inView.contact ? "2px solid #fa58b6" : "none",
                }}
              >
                <Link
                  href="#contact"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </Link>
              </Typography>
            </Container>
          )}
          {isMobile && <MobileNav />}
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default NavBar;
{
  /* <animated.div className="nav-bar" style={navStyle}>
              
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
            </animated.div> */
}

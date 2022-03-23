import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { React, useState } from "react";
import { useTheme } from "@mui/material/styles";
function TaskCard({
  title,
  logo,
  mainText,
  buttonSiteText,
  buttonGithubText,
  urlSite,
  urlGithub,
}) {
  const theme = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e) => {
    if (e.target.id !== "taskcard-button") setIsFlipped(!isFlipped);
  };
  return (
    <Box onClick={handleFlip}>
      <Box
        background={theme.palette.bg.fg1}
        sx={{
          transition: "transform 1s",
          transformStyle: "preserve-3d",
          cursor: "pointer",
          transform: isFlipped ? "rotateY(180deg)" : "none",
          transition: isFlipped ? "transform 0.5s" : "transform 1s",
        }}
      >
        <Card
          sx={{
            position: "absolute",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "clamp(250px, 20.85vw, 400px)",
            height: "clamp(300px, 27.8vw, 600px)",

            backgroundColor: theme.palette.bg.fg1,
            color: theme.palette.text.highlightColor,
            fontSize: theme.palette.text.mediumFontSize,
            verticalAlign: "middle",
            textAlign: "left",
            padding: "1rem",
            borderRadius: "5px",
            backfaceVisibility: "hidden",
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <Box
            component={"img"}
            src={logo}
            alt="logo for the task card"
            sx={{ margin: "1.5rem", width: "50%" }}
          />
          {title}
        </Card>
        <Card
          sx={{
            position: "absolute",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "clamp(250px, 20.85vw, 400px)",
            height: "clamp(300px, 27.8vw, 600px)",
            backgroundColor: theme.palette.bg.secondary,
            color: theme.palette.text.mainColor,
            fontSize: theme.palette.text.mediumFontSize,
            verticalAlign: "middle",
            textAlign: "left",
            padding: "1rem 0.5rem",
            borderRadius: "5px",
            backfaceVisibility: "hidden",
            display: "flex",
            flexFlow: "column nowrap",
            position: "relative",

            // color: var(--text),
            transform: "rotateY(180deg)",

            justifyContent: "space-between",
          }}
        >
          <CardContent>{mainText}</CardContent>
          <CardActions sx={{ display: "flex", justifySelf: "center" }}>
            <Button
              variant="contained"
              sx={{
                width: "50%",
                color: theme.palette.text.mainColor,
                background: theme.palette.bg.fg1,

                "&:hover": {
                  background: theme.palette.bg.fg2,
                },
              }}
              onClick={() => {
                window.open(urlSite, "_blank");
              }}
            >
              {buttonSiteText}
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "50%",
                color: theme.palette.text.mainColor,
                background: theme.palette.bg.fg1,
                "&:hover": {
                  background: theme.palette.bg.fg2,
                },
              }}
              onClick={() => {
                window.open(urlGithub, "_blank");
              }}
            >
              {buttonGithubText}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

export default TaskCard;
// <div
//   className={`task-card ${isFlipped ? `flipped` : ``}`}
//   onClick={handleFlip}
// >
//   <div className="content">
//     <div className="front">
//       <img src={logo} alt="logo for the task card" />
//       {title}
//     </div>
//     <div className="back">
//       <div>{mainText}</div>
//       <div className="button-container">
//         <button
//           id="taskcard-button"
//           onClick={() => {
//             window.open(urlSite, "_blank");
//           }}
//         >
//           {buttonSiteText}
//         </button>
//         <button
//           id="taskcard-button"
//           onClick={() => {
//             window.open(urlGithub, "_blank");
//           }}
//         >
//           {buttonGithubText}
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

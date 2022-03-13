import { React, useState } from "react";

function TaskCard({
  title,
  logo,
  mainText,
  buttonSiteText,
  buttonGithubText,
  urlSite,
  urlGithub,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e) => {
    if (e.target.id !== "taskcard-button") setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`task-card ${isFlipped ? `flipped` : ``}`}
      onClick={handleFlip}
    >
      <div className="content">
        <div className="front">
          <img src={logo} alt="logo for the task card" />
          {title}
        </div>
        <div className="back">
          <div>{mainText}</div>
          <div className="button-container">
            <button
              id="taskcard-button"
              onClick={() => {
                window.open(urlSite, "_blank");
              }}
            >
              {buttonSiteText}
            </button>
            <button
              id="taskcard-button"
              onClick={() => {
                window.open(urlGithub, "_blank");
              }}
            >
              {buttonGithubText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

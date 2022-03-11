import { React, useState } from "react";

function TaskCard({ title, logo, mainText, buttonText, handleClick }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e) => {
    if (e.target.id != "taskcard-button") setIsFlipped(!isFlipped);
  };
  return (
    <div
      className={`task-card ${isFlipped ? `flipped` : ``}`}
      onClick={handleFlip}
    >
      <div className="content">
        <div className="front">
          <img src={logo} />
          {title}
        </div>
        <div className="back">
          <div>{mainText}</div>
          <button
            id="taskcard-button"
            // onClick={() =>
            //   window.open("https://github.com/Kaylinkk/task_page", "_blank")
            // }
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

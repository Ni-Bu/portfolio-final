import { React, useState } from "react";

function TaskCard({ title, logo, mainText, buttonText, onClicked }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const onFlip = () => {
    setIsFlipped((isFlipped) => !isFlipped);
  };
  return (
    <div className={`task-card ${isFlipped ? `flipped` : ``}`} onClick={onFlip}>
      <div className="content">
        <div className="front">{title}</div>
        <div className="back">
          {mainText}
          <button
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

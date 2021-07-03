import React from "react";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as RightArrow } from "../images/fast-forward.svg";
import { ReactComponent as LeftArrow } from "../images/rewind.svg";

const Controls = ({ setWind, delay, setDelay }) => {
  return (
    <div className="buttonRow">
      <LeftArrow
        height={32}
        width={32}
        className="icon"
        onClick={() => setWind(-1)}
      />

      {delay ? (
        <Pause
          height={32}
          width={32}
          className="icon run"
          onClick={() => setDelay(null)}
        />
      ) : (
        <Play
          height={32}
          width={32}
          className="icon run"
          onClick={() => setDelay(50)}
        />
      )}
      <RightArrow
        height={32}
        width={32}
        className="icon"
        onClick={() => setWind(1)}
      />
    </div>
  );
};

export default Controls;

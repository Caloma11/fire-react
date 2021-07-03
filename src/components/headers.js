import React from "react";
import IntensityRange from "./intensityRange.js";
import Controls from "./controls";

const Headers = ({
  setRunning,
  running,
  setWind,
  firePixels,
  setFirePixels,
  width,
}) => {
  return (
    <div className="headers">
      <div className="stopAndWind">
        <Controls setWind={setWind} running={running} setRunning={setRunning} />
      </div>
      <div className="intensityContainer">
        <IntensityRange
          firePixels={firePixels}
          width={width}
          setFirePixels={setFirePixels}
        />
      </div>
    </div>
  );
};

export default Headers;

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

import "./App.css";
import FireTable from "./components/fireTable.js";
import Headers from "./components/headers.js";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [height] = useState(60);
  const [width] = useState(60);
  const [pixelAmount] = useState(height * width);
  const [firePixels, setFirePixels] = useState([
    ...Array(pixelAmount).fill(0).splice(width),
    ...Array(width).fill(36),
  ]);

  const [wind, setWind] = useState(-1);
  const [running, setRunning] = useState(false);

  const calculatePropagation = () => {
    const firePixelsCopy = [...firePixels];

    firePixelsCopy.forEach((_pixel, index) => {
      if (index + width <= firePixelsCopy.length - 1) {
        const belowPixelIndex = index + width;
        const belowPixelIntensity = firePixelsCopy[belowPixelIndex];
        const decay = Math.floor(Math.random() * (wind === 1 ? 4 : 3));

        const newIntensity =
          belowPixelIntensity - decay >= 0 ? belowPixelIntensity - decay : 0;

        switch (wind) {
          case 0:
            firePixelsCopy[index] = newIntensity;
            break; // no wind
          case 1:
            firePixelsCopy[index + decay] = newIntensity;
            break; // wind from left
          default:
            firePixelsCopy[index - decay] = newIntensity;
            break; // wind comes from right
        }
      }
    });
    setFirePixels(firePixelsCopy);
  };

  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    const savedRunning = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
      savedRunning.current = running;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null && running) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay, running]);
  };

  useInterval(() => {
    calculatePropagation();
  }, 50);

  return (
    <div className="App">
      <Headers
        {...{ setRunning, running, setWind, firePixels, width, setFirePixels }}
      />
      <div className="fireCanvas">
        <FireTable {...{ height, width, firePixels, setFirePixels }} />
      </div>
    </div>
  );
};

export default App;

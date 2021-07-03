import React, { useState, useEffect, useCallback } from "react";
import { Range } from "react-range";

const IntensityRange = ({ width, firePixels, setFirePixels }) => {
  const [values, setValues] = useState([36]);

  const changeFireSource = useCallback(
    (value) => {
      const copy = [...firePixels];
      for (let i = copy.length - width - 1; i <= copy.length - 1; i++) {
        copy[i] = value;
      }
      setFirePixels(copy);
    },
    [firePixels, setFirePixels, width]
  );

  useEffect(() => {
    if (firePixels[firePixels.length - 1] !== values[0]) {
      changeFireSource(values[0]);
    }
  }, [changeFireSource, values, firePixels]);

  return (
    <div style={{ minWidth: 200 }}>
      <Range
        values={values}
        step={1}
        min={0}
        max={36}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            style={{
              backgroundColor: "rgba(128, 128, 128, .6)",
              height: "4px",
              display: "flex",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <div
              ref={props.ref}
              style={{
                width: "100%",
                backgroundColor: "red",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "10px",
              backgroundColor: "rgba(128, 128, 128)",
              cursor: isDragged ? "grabbing" : "pointer",
              alignItems: "center",
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default IntensityRange;

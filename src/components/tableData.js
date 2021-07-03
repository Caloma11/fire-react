import React from "react";
import colors from "../data/colors";

const TableData = ({ row, width, col, firePixels, setFirePixels }) => {
  const index = col + row * width;
  const color = colors[firePixels[index]];

  const extinguishBoxFire = (center) => {
    const top = center - width;
    const topRight = center - width + 1;
    const topLeft = center - width - 1;
    const left = center - 1;
    const right = center + 1;
    const bottomRight = center + width + 1;
    const bottomLeft = center + width - 1;
    const bottom = center + width;
    const firePixelsCopy = [...firePixels];
    const pixelIndexes = [
      center,
      top,
      topLeft,
      topRight,
      left,
      right,
      bottomLeft,
      bottomRight,
      bottom,
    ];

    pixelIndexes.forEach((index) => {
      if (firePixelsCopy[index]) {
        firePixelsCopy[index] = 0;
      }
    });
    setFirePixels(firePixelsCopy);
  };

  const handleClick = () => {
    extinguishBoxFire(index);
  };

  return (
    <td
      onClick={handleClick}
      style={{ backgroundColor: `rgb(${color.r},${color.g},${color.b})` }}
    ></td>
  );
};

export default TableData;

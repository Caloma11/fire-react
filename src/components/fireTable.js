import React from "react";
import TableRow from "./tableRow.js";

const FireTable = ({ height, width, firePixels, setFirePixels }) => {
  return (
    <table cellSpacing={0}>
      <tbody>
        {Array(height)
          .fill(0)
          .map((_i, index) => (
            <TableRow
              width={width}
              key={index}
              row={index}
              firePixels={firePixels}
              setFirePixels={setFirePixels}
            />
          ))}
      </tbody>
    </table>
  );
};

export default FireTable;

import React from "react";
import TableData from "./tableData.js";

const TableRow = ({ width, row, firePixels, setFirePixels }) => {
  return (
    <tr>
      {Array(width)
        .fill(0)
        .map((_i, index) => (
          <TableData
            key={index}
            row={row}
            width={width}
            col={index}
            firePixels={firePixels}
            setFirePixels={setFirePixels}
          />
        ))}
    </tr>
  );
};

export default TableRow;

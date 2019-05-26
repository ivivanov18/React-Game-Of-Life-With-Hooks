import React from "react";
import Box from "./Box";

function renderBox(data, i, j, selectBox) {
  const boxId = `${i}_${j}`;
  const boxClass = data ? "box on" : "box off";

  return (
    <Box
      row={i}
      col={j}
      key={boxId}
      boxId={boxId}
      boxClass={boxClass}
      selectBox={selectBox}
    />
  );
}

function Grid({ cols, rows, data, selectBox }) {
  const width = cols * 14;

  return (
    <div className="grid" style={{ width: width }}>
      {data.map((row, i) =>
        row.map((elt, j) => renderBox(elt, i, j, selectBox))
      )}
    </div>
  );
}

Grid.propTypes = {};

export default Grid;

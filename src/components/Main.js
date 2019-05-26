import React, { useState, useRef } from "react";

import Controls from "./Controls";
import Grid from "./Grid";

const cloneArray = arr => {
  return JSON.parse(JSON.stringify(arr));
};

/**
 * Main Component that is going to be rendered in App and that is going to
 * render Grid component and buttons to interact with the game
 */
function Main() {
  const [dimGrid, setDimGrid] = useState([30, 50]); // [rows, cols]
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [grid, setGrid] = useState(
    Array(dimGrid[0])
      .fill()
      .map(() => Array(dimGrid[1]).fill(false))
  );
  const renders = useRef(0);

  const selectBox = (row, col) => {
    const gridCopy = grid.slice();
    gridCopy[row][col] = !gridCopy[row][col];
    setGrid(gridCopy);
  };

  const selectDimensions = dimensions => {
    setDimGrid(dimensions);
    setGrid(
      Array(dimensions[0])
        .fill()
        .map(() => Array(dimensions[1]).fill(false))
    );
  };

  return (
    <React.Fragment>
      <div style={{ color: "white" }}>Renders{renders.current++}</div>
      <h1>React Game Of Life with Hooks</h1>
      <Controls selectDimensions={selectDimensions} />
      <div style={{ color: "white" }}>
        Rows:{dimGrid[0]}/Cols:{dimGrid[1]}
      </div>
      <Grid
        data={grid}
        rows={dimGrid[0]}
        cols={dimGrid[1]}
        selectBox={selectBox}
      />
      <h2>Generation: {generation}</h2>
    </React.Fragment>
  );
}

export default Main;

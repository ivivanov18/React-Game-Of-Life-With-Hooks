import React, { useState, useRef } from "react";

import Grid from "./Grid";

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

  console.log(grid[0]);
  return (
    <div>
      <h1>React Game Of Life with Hooks</h1>
      <Grid data={grid} rows={dimGrid[0]} cols={dimGrid[1]} />
      <h2>{generation}</h2>
    </div>
  );
}

export default Main;

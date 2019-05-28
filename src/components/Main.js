import React, { useState, useRef, useEffect } from "react";

import Controls from "./Controls";
import Grid from "./Grid";

import { cloneArray, initNestedArray } from "../helpers";

/**
 * Main Component that is going to be rendered in App and that is going to
 * render Grid component and buttons to interact with the game
 */
function Main() {
  const [dimGrid, setDimGrid] = useState([30, 50]); // [rows, cols]
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [grid, setGrid] = useState(
    initNestedArray(dimGrid[0], dimGrid[1], false)
  );
  const renders = useRef(0);

  const play = () => {
    console.log("play");
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const clear = () => {
    setIsPlaying(false);
    setGrid(
      Array(dimGrid[0])
        .fill()
        .map(() => Array(dimGrid[1]).fill(false))
    );
  };

  const playGame = () => {
    const rows = dimGrid[0];
    const cols = dimGrid[1];

    const cloneGrid = cloneArray(grid);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0;
        if (i > 0) if (grid[i - 1][j]) count++;
        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
        if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) count++;
        if (j < cols - 1) if (grid[i][j + 1]) count++;
        if (j > 0) if (grid[i][j - 1]) count++;
        if (i < rows - 1) if (grid[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++;
        if (i < rows - 1 && j < cols - 1) if (grid[i + 1][j + 1]) count++;
        if (grid[i][j] && (count < 2 || count > 3)) cloneGrid[i][j] = false;
        if (!grid[i][j] && count === 3) cloneGrid[i][j] = true;
      }
    }
    setGeneration(generation + 1);
    setGrid(cloneGrid);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        playGame();
      }, 10);
      return () => clearInterval(interval);
    }
  }, [playGame]);

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

  const seed = () => {
    const duplicateArray = grid.map(row =>
      row.map(elt => {
        if (Math.floor(Math.random() * 4) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
    setGrid(duplicateArray);
  };

  return (
    <React.Fragment>
      <div style={{ color: "white" }}>Renders{renders.current++}</div>
      <h1>React Game Of Life with Hooks</h1>
      <Controls
        selectDimensions={selectDimensions}
        onSeed={() => seed()}
        onPlay={() => play()}
        onPause={() => pause()}
      />
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

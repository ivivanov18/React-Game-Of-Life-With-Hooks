import React from "react";

function Box({ row, col, boxClass, boxId, selectBox }) {
  return <div className={boxClass} boxId={boxId} onClick={selectBox} />;
}

export default Box;

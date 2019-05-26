import React from "react";

function Box({ row, col, boxClass, boxId, selectBox }) {
  const onSelectBox = () => {
    selectBox(row, col);
  };

  return <div className={boxClass} boxId={boxId} onClick={onSelectBox} />;
}

export default Box;

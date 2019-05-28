import React from "react";

function Box({ row, col, boxClass, id, selectBox }) {
  const onSelectBox = () => {
    selectBox(row, col);
  };

  return <div className={boxClass} id={id} onClick={onSelectBox} />;
}

export default Box;

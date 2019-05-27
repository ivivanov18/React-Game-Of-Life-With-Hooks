import React from "react";

function Button({ name, func }) {
  return <button onClick={func}>{name}</button>;
}

function Selection({ name, dimensions, selectDimensions }) {
  const onSelect = evt => {
    const values = evt.target.value.split(",").map(val => parseInt(val));
    selectDimensions(values);
  };

  return (
    <select name={name} onChange={onSelect}>
      {dimensions.map(value => (
        <option value={value}>
          {value[0]}x{value[1]}
        </option>
      ))}
    </select>
  );
}

function Controls({ selectDimensions, onSeed }) {
  return (
    <div className="center">
      <Button name="Play" />
      <Button name="Pause" />
      <Button name="Clear" />
      <Button name="Slow" />
      <Button name="Fast" />
      <Button name="Seed" func={onSeed} />
      <Selection
        name="Grid Dimensions"
        dimensions={[[10, 20], [30, 50], [50, 70]]}
        selectDimensions={selectDimensions}
      />
    </div>
  );
}
export default Controls;

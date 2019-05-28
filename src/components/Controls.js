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
        <option key={value} value={value}>
          {value[0]}x{value[1]}
        </option>
      ))}
    </select>
  );
}

function Controls({
  selectDimensions,
  onSeed,
  onPlay,
  onPause,
  onClear,
  onSlow,
  onFast
}) {
  return (
    <div className="center">
      <Button name="Play" func={onPlay} />
      <Button name="Pause" func={onPause} />
      <Button name="Clear" func={onClear} />
      <Button name="Slow" func={onSlow} />
      <Button name="Fast" func={onFast} />
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

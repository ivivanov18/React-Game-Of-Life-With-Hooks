export const cloneArray = arr => JSON.parse(JSON.stringify(arr));

export const initNestedArray = (rows, cols, value) =>
  Array(rows)
    .fill()
    .map(() => Array(cols).fill(value));

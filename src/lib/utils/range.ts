const range = (n: number, initial = 0) =>
  Array(n)
    .fill(0)
    .map((_, index) => index + initial);

export default range;

const fn = (a1, a2, a3, a4, a5) => {
  const x1 = 1;
  const x2 = 0;
  const x3 = 5;
  const x4 = 3;
  const x5 = 9;
  return x1 * a1 + x2 * a2 + x3 * a3 + x4 * a4 + x5 * a5;
};

console.log(fn(10000, 1000, 100, 10, 1));

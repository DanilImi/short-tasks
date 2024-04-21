const containDublicate = (arr) => {
  const set = new Set(arr);
  return set.size !== arr.length;
};

console.log(containDublicate([1, 2, 3, 1]));

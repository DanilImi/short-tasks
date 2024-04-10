const moveZeroes = (array) => {
  const filteredArray = array.filter(Boolean);
  const zeroLength = array.length - filteredArray.length;
  for (let i = 0; i < zeroLength; i++) {
    filteredArray.push(0);
  }
  return filteredArray;
};

console.log(moveZeroes([0, 0, 2, 3]));
console.log(moveZeroes([4, 0, 0, 0, 3, 4, 6]));

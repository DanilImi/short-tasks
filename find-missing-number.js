function findMissingNumber(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const end = sortedArray[sortedArray.length - 1];
  const start = arr[0];
  const bitMap = new Map();
  for (let i = 0; i < end - start + 1; i++) {
    bitMap.set(i, false);
  }

  for (const num of arr) {
    const offsetNumber = num - start;
    bitMap.set(offsetNumber, true);
  }

  for (let i = 0; i < bitMap.size; i++) {
    if (bitMap.get(i) === false) {
      return i + start;
    }
  }

  return -1;
}
module.exports = findMissingNumber;

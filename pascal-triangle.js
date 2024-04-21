const pascalTriangle = (numsRow) => {
  let res = [];

  if (numsRow >= 1) res.push([1]);
  if (numsRow >= 2) res.push([1, 1]);

  //logic
  for (let i = 2; i < numsRow; i++) {
    let first = 1;
    let last = 1;

    let prevArr = res[i - 1];

    if (prevArr.length === 2) {
      res.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let add = [];

      while (right < prevArr.length) {
        add.push(prevArr[left] + prevArr[right]);
        left++;
        right++;
      }

      res.push([first, ...add, last]);
    }
  }

  return res;
};

console.log(pascalTriangle(5));

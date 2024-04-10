const findMissingNumber = require("./find-missing-number");

describe("findMissingNumber", () => {
  it("должна находить пропущенное число в последовательности", () => {
    expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4);
    expect(findMissingNumber([7, 9, 10, 11, 12])).toBe(8);
  });

  it("должна возвращать -1, если массив пуст", () => {
    expect(findMissingNumber([])).toBe(-1);
  });

  it("должна возвращать -1, если в массиве одно значение", () => {
    expect(findMissingNumber([0])).toBe(-1);
    expect(findMissingNumber([5])).toBe(-1);
  });

  it("должна возвращать -1, если в последовательности нет пропущенных чисел", () => {
    expect(findMissingNumber([1, 2, 3, 4])).toBe(-1);
  });

  it("должна возвращать -1, если нет пропущенных чисел", () => {
    expect(findMissingNumber([0, 1, 2, 3, 4])).toBe(-1);
  });

  it("должна возвращать первое найденное пропущенное в последовательности", () => {
    expect(findMissingNumber([8, 7, 9, 10, 11, 12, 15])).toBe(13);
  });

  it("должна корректно работать с большими массивами чисел", () => {
    const arr = [];
    for (let i = 0; i <= 1000000; i++) {
      if (i !== 500000) {
        arr.push(i);
      }
    }
    expect(findMissingNumber(arr)).toBe(500000);
  });
});

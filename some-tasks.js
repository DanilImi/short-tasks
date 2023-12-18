const isPalindrome = (str) => {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
};

console.log("isPalindrome", isPalindrome("abb"));

const isBalanced = (str) => {
  const stack = [];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];

    if (openingBrackets.includes(currentBracket)) {
      stack.push(currentBracket);
    } else if (closingBrackets.includes(currentBracket)) {
      const lastOpenBracket = stack.pop();
      if (lastOpenBracket !== bracketMap[currentBracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log("isBalanced", isBalanced("(x + y) - (4)")); // -> true
console.log("isBalanced", isBalanced("(((10 ) ()) ((?)(:)))")); // -> true
console.log("isBalanced", isBalanced("[{()}]")); // -> true
console.log("isBalanced", isBalanced("(50)(")); // -> false
console.log("isBalanced", isBalanced("[{]}")); // -> false

const splitTextIntoSMS = (text) => {
  const MAX_SMS_LENGTH = 140;
  const words = text.split(" ");
  const result = [];

  let currentSMS = "";
  let smsCount = 1;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const potentialSMS = currentSMS === "" ? word : `${currentSMS} ${word}`;

    if (potentialSMS.length <= MAX_SMS_LENGTH) {
      currentSMS = potentialSMS;
    } else {
      result.push(currentSMS);
      currentSMS = word;
      smsCount++;
    }
  }
  if (currentSMS !== "") {
    result.forEach((str, index, array) => {
      array[index] = `${str} ${index + 1}/${result.length + 1}`;
    });
    result.push(`${currentSMS} ${smsCount}/${result.length + 1}`);
  }
  if (result.length === 1) {
    result.forEach((str, index, array) => {
      array[index] = str.replace(/\d*\/\d*/g, "").trim();
    });
  }

  return result;
};

const example1 = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const result1 = splitTextIntoSMS(example1);
console.log("result1", result1);

const example2 =
  "Lorem ipsum dolor sit anet consectetur adipiscing elit Nullam eleifend odio at magna pretium suscipit Nam commodo mauris felis ut suscipit velit effecitur eget Sed sit amet posuere risus";
const result2 = splitTextIntoSMS(example2);
console.log("result2", result2);

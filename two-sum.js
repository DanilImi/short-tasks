const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

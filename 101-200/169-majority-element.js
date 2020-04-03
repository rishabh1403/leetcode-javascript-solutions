
// sort and find middle
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);

  const l = nums.length;

  if (l % 2 === 0) {
    return nums[l / 2]
  } else {
    return nums[(l - 1) / 2]
  }
};

// Boyer–Moore majority vote algorithm
// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
var majorityElement = function (nums) {
  let maj = 0, count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[maj]) {
      count++
    } else {
      count--;
    }

    if (count === 0) {
      maj = i;
      count = 1;
    }
  }
  return nums[maj]
};
/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/missing-number/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-missing-number
youtube video :- https://youtu.be/I6AUMvi13fc
*/


var missingNumber = function (nums) {
  const length = nums.length;
  let sum = ((length + 1) * length) / 2;

  for (let i = 0; i < length; i++) {
    sum = sum - nums[i];
  }

  return sum;
};
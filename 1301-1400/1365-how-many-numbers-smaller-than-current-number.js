/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/missing-number/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-missing-number
youtube video :- https://youtu.be/I6AUMvi13fc
*/


var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  return nums.map(num => sorted.indexOf(num));
};
/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/transpose-matrix/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-transpose-matrix
youtube video :- https://youtu.be/cMnPxDJlFIc
*/

var decompressRLElist = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      res.push(nums[i + 1])
    }
  }

  return res;
};
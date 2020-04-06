/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/decompress-run-length-encoded-list/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-decompress-run-length-encoded-list
youtube video :- https://youtu.be/Ds5zZNOk89U
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
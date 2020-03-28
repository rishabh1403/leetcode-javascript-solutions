/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/search-insert-position/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-search-insert-position
youtube video :- https://youtu.be/l2XPvyTlC6c
*/

var searchInsert = function (nums, target) {

  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
};
/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/contains-duplicate/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-contains-duplicate
youtube video :- https://youtu.be/cuR5uyV8snc
*/


var containsDuplicate = function (nums) {
  const set = new Set(nums);

  return set.size !== nums.length
};
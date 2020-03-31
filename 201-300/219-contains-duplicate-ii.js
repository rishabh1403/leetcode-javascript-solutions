/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/contains-duplicate-ii/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-contains-duplicate-ii
youtube video :- https://youtu.be/O4MF2wBOrTM
*/


var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const j = map.get(nums[i]);
      
      if (Math.abs(i - j) <= k) {
        return true;
      }
    }

    map.set(nums[i], i);
  }

  return false;
};
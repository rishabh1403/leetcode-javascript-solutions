/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-how-many-numbers-smaller-than-current-number
youtube video :- https://youtu.be/a2RWy9kqOhs
*/


var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  return nums.map(num => sorted.indexOf(num));
};
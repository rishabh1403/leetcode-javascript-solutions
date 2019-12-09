/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
blog for this code :- https://rishabh1403.com/leetcode-solution-of-two-sum-ii-in-javascript
youtube video :- https://www.youtube.com/watch?v=MjxN8HIzIRc
*/


var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i !== j) {
    if (numbers[i] + numbers[j] > target) {
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};
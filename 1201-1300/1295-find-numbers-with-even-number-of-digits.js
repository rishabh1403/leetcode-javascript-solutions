/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-find-numbers-with-even-number-of-digits
youtube video :- https://youtu.be/p9LaMHYY1R0
*/


var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    let digit = 0;

    while (num > 0) {
      digit++;
      num = parseInt(num / 10);
    }

    if (digit % 2 === 0) count++;
  }

  return count;
};
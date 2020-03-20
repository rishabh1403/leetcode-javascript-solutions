/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-number-of-steps-to-reduce-a-number-to-zero
youtube video :- https://www.youtube.com/watch?v=sQYhrMf1VMc
*/

var numberOfSteps = function (num) {
  let counter = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    counter++;
  }
  return counter;
};
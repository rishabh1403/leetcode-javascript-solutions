/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/guess-number-higher-or-lower/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/
youtube video :- https://youtu.be/h0uL59Z9Hoc
*/

var guessNumber = function (n) {

  if (guess(n) === 0) return n

  let low = 1, high = n;
  while (n > 0) {
    const pick = (parseInt(high + low) / 2);
    const res = guess(pick);

    if (res === 0) {
      return pick
    }
    if (res === -1) {
      high = pick;
    }
    if (res === 1) {
      low = pick;
    }
  }
};
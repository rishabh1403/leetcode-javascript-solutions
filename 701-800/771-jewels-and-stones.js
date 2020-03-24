/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/jewels-and-stones/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-jewels-and-stones
youtube video :- https://youtu.be/cNVJZF5UT1w
*/

var numJewelsInStones = function (J, S) {
  const set = new Set(J.split(""));
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (set.has(S[i])) {
      count++;
    }
  }

  return count;
};
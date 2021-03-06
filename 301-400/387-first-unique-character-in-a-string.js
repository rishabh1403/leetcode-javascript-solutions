/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/first-unique-character-in-a-string/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/05/first-unique-character-in-a-string/
youtube video :- https://youtu.be/rxVNTwf_zfg
*/

var firstUniqChar = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], -1)
    } else {
      map.set(s[i], i)
    }
  }
  for (let [key, value] of map) {
    if (value !== -1) {
      return value;
    }
  }

  return -1;
};
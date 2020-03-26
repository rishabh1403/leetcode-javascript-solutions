/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/valid-anagram/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-valid-anagram
youtube video :- https://youtu.be/7z25qqUCOUE
*/

var isAnagram = function (s, t) {
  const ans = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    ans[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    ans[t.charCodeAt(i) - 97]--;
  }

  for (let i = 0; i < 26; i++) {
    if (ans[i] !== 0)
      return false;
  }

  return true;
};
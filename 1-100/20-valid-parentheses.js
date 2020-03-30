/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/valid-parentheses/
blog for this code :-
https://rishabh1403.com/posts/coding/leetcode/2019/09/leetcode-solution-of-valid-parentheses-in-javascript
youtube video :- https://youtu.be/OuRH74PiPas
*/


var isValid = function (s) {

  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  const stack = [];

  for (const paran of s) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran)
    } else {
      const closeParan = stack.pop();
      if (paran !== obj[closeParan]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
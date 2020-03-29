/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/to-lower-case/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-to-lower-case
youtube video :- https://youtu.be/jFi7-YgIXJQ
*/


const isUpperCase = char => {
  let ascii = char.charCodeAt(0);

  if (ascii >= 65 && ascii <= 90) {
    return true;
  }

  return false
}

const toLower = char => {
  let ascii = char.charCodeAt(0);

  ascii = String.fromCharCode(ascii + 32);

  return ascii
}

var toLowerCase = function (str) {
  return str.split("").map(s => isUpperCase(s) ? toLower(s) : s).join("");
};
/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/reverse-integer/
blog for this code :- https://rishabh1403.com/leetcode-solution-of-reverse-integer-in-javascript
youtube video :- https://www.youtube.com/watch?v=cIBwTqjh6VQ

*/


// string based method

var reverse = function (x) {

  const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));

  if (reversedInt > 2 ** 31) return 0;

  return reversedInt * Math.sign(x);

};

// string based method without explicit type casting

var reverse = function (x) {

  const reversedInt = Math.abs(x).toString().split('').reverse().join('');

  if (reversedInt > 2 ** 31) return 0;

  return reversedInt * Math.sign(x);

};

// integer based method

var reverse = function (x) {
  const isNegative = x < 0 ? true : false;

  if (isNegative) {
    x = x * -1;
  }

  let reversed = 0;
  while (x > 0) {
    reversed = (reversed * 10) + (x % 10);

    x = parseInt(x / 10);
  }

  if (reversed > 2 ** 31) {
    return 0;
  }

  return isNegative ? reversed * -1 : reversed;
};
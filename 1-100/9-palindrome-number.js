/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/palindrome-number/
blog for this code :- https://rishabh1403.com/leetcode-solution-of-palindrome-number-in-javascript
youtube video :- https://youtu.be/7lCkkX3UAvU
*/



// string based implementation

var isPalindrome = function (x) {
  return x == x.toString().split('').reverse().join('');
};

// number based implementation

var isPalindrome = function (x) {
  const isNegative = x < 0 ? true : false;

  if (isNegative) {
    return false;
  }

  const temp = x;
  let reversed = 0;

  while (x > 0) {
    reversed = (reversed * 10) + (x % 10);
    x = parseInt(x / 10);
  }

  return reversed == temp;
};

// two pointer method

var isPalindrome = function (x) {

  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  const str = String(x);
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
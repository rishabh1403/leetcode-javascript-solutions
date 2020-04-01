/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/reverse-string/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-reverse-string
youtube video :- https://youtu.be/8j24rPjGBwU
*/


var reverseString = function (s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
};
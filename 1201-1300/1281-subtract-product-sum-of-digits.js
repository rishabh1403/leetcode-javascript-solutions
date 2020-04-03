/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-subtract-product-sum-of-digits-of-number
youtube video :- https://youtu.be/BL6VoKQqlmM
*/

var subtractProductAndSum = function (n) {
  let product = 1, sum = 0;

  while (n > 0) {
    const digit = n % 10;
    n = parseInt(n / 10);

    product = product * digit;
    sum += digit
  }

  return product - sum
};
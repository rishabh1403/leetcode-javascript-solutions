/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/fibonacci-number/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-fibonacci-number
youtube video :- https://youtu.be/iyyhQfO_KKY
*/


// Recursive solution
var fib = function (N) {
  if (N === 0 || N === 1) return N;

  return fib(N - 1) + fib(N - 2);

};

// Iterative solution
var fib = function (N) {
  if (N === 0 || N === 1) return N;

  let first = 0, second = 1;
  let sum = first + second;

  for (let i = 2; i < N; i++) {
    first = second;
    second = sum;

    sum = first + second;
  }

  return sum
};
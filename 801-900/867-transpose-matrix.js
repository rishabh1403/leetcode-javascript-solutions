/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/transpose-matrix/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/04/leetcode-transpose-matrix
youtube video :- https://youtu.be/cMnPxDJlFIc
*/

var transpose = function (A) {

  const result = [];

  for (let i = 0; i < A[0].length; i++) {
    const col = []
    for (let j = 0; j < A.length; j++) {
      col.push(A[j][i]);
    }
    result.push(col)
  }

  return result
};
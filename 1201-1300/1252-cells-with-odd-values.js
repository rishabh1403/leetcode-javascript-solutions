/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-defang-ip-address
youtube video :- https://youtu.be/s_CepLCQHNY
*/

var oddCells = function (n, m, indices) {
  const row = new Array(n).fill(0)
  const col = new Array(m).fill(0)

  for (let i = 0; i < indices.length; i++) {
    row[indices[i][0]]++;
    col[indices[i][1]]++;
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((row[i] + col[j]) % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
};
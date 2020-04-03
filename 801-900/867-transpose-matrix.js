

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
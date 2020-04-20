var guessNumber = function (n) {

  if (guess(n) === 0) return n

  let low = 1, high = n;
  while (n > 0) {
    const pick = (parseInt(high + low) / 2);
    const res = guess(pick);

    if (res === 0) {
      return pick
    }
    if (res === -1) {
      high = pick;
    }
    if (res === 1) {
      low = pick;
    }
  }
};
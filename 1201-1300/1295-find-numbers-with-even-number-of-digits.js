

var findNumbers = function (nums) {
  let count = 0;
  for (let num of nums) {
    let digit = 0;

    while (num > 0) {
      digit++;
      num = parseInt(num / 10);
    }

    if (digit % 2 === 0) count++;
  }

  return count;
};
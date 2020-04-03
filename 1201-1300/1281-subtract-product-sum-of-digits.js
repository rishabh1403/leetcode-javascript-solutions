

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
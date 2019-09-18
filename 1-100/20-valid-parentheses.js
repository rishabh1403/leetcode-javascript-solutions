
var isValid = function (s) {

  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  const stack = [];

  for (const paran of s) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran)
    } else {
      const closeParan = stack.pop();
      if (paran !== obj[closeParan]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
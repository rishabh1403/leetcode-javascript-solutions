
const isUpperCase = char => {
  let ascii = char.charCodeAt(0);

  if (ascii >= 65 && ascii <= 90) {
    return true;
  }

  return false
}

const toLower = char => {
  let ascii = char.charCodeAt(0);

  ascii = String.fromCharCode(ascii + 32);

  return ascii
}

var toLowerCase = function (str) {
  return str.split("").map(s => isUpperCase(s) ? toLower(s) : s).join("");
};
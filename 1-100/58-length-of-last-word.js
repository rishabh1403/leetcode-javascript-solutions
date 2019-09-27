// library methods

var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");

  if (words.length < 1) {
    return 0;
  }

  return words[words.length - 1].length;
};


// Back traversal
var lengthOfLastWord = function(s) {
  let len = 0;
  let hasStarted = false;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== ' ') hasStarted = true;
      if (hasStarted) {
          if (s[i] === ' ') break;
          len++;
      }
  }
  return len;
};

// Back traversal with library menthods

var lengthOfLastWord = function(s) {
  s = ' ' + s.trim();
  return s.length - s.lastIndexOf(' ') - 1;
};

// regex

var lengthOfLastWord = function(s) {
  return (s.match(/(\w+)\s*$/) || [, ''])[1].length;
};
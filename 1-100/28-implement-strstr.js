/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  const haystackLength = haystack.length;
  const needleLength = needle.length;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let flag = true;

    for (let j = i, k = 0; j < needleLength + i, k < needleLength; j++ , k++) {
      if (haystack[j] !== needle[k]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      return i;
    }
  }
  return -1;
};


////////////////////////////

var strStr = function (haystack, needle) {
  if (haystack === '' && needle === '') {
    return 0
  }
  if (needleLength > haystack.length) {
    return -1;
  }
  for (var i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1

};

//////////////////////////////
KMP 
Robin karp
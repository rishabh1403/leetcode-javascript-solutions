/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle.length ===  0) return 0;
  const hayLen = haystack.length;
  const neeLen = needle.length;
  for(let i=0;i<=hayLen-neeLen;i++){
      let flag = true;
      // console.log(i)
      for(let j = i,k = 0;j<neeLen+i,k<neeLen;j++,k++){
          console.log(j,k);
          console.log(haystack[j]=== needle[k]);
          if(haystack[j]!==needle[k]){
              
              // console.log(haystack[j], j)
              // console.log(needle[k], k)
              flag = false;
              break;
          }
          
      }
      // console.log(flag);
      if(flag) return i;
  }
  return -1;
};

console.log(strStr("hello", "ll"));


////////////////////////////

var strStr = function(haystack, needle) {
  if (haystack === '' && needle === '') {
      return 0
  }
  if(needleLength > haystack.length){
    return -1;
}
  for (var i=0; i < haystack.length - needle.length + 1; i++){
    if (haystack.slice(i, i +needle.length) === needle) {
      return i
    }
  }
  return -1

};

//////////////////////////////
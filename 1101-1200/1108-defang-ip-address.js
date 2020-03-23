/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/defanging-an-ip-address/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/03/leetcode-defang-ip-address
youtube video :- https://youtu.be/s_CepLCQHNY
*/

/*
  Array Methods
*/
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

/*
  Regex
*/

var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};
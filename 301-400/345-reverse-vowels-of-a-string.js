/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/reverse-vowels-of-a-string/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/05/leetcode-reverse-vowels-of-a-string
youtube video :- https://youtu.be/5g6iV76aR-E
*/

var reverseVowels = function (s) {
  const arr = s.split("");

  let left = 0, right = arr.length - 1;

  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

  while (left < right) {
    if (vowels.indexOf(arr[left]) === -1) {
      left++;
      continue;
    }
    if (vowels.indexOf(arr[right]) === -1) {
      right--;
      continue;
    }

    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr.join("")
};
/*
Author :- Rishabh Jain <contact@rishabh1403.com>
Solution for :- https://leetcode.com/problems/create-target-array-in-the-given-order/
blog for this code :- https://rishabh1403.com/posts/coding/leetcode/2020/05/create-target-array-in-the-given-order/
youtube video :- https://youtu.be/vZ6VpUJk7CU
*/

var createTargetArray = function(nums, index) {
    
  return index.reduce((acc,el,idx) => {
      return [...acc.slice(0,el), nums[idx], ...acc.slice(el)]
  },[])
};
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const arr = [];

  for (let val of set1) {
    if (set2.has(val)) {
      arr.push(val)
    }
  }

  return arr;
};
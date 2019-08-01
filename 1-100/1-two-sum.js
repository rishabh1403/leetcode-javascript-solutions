// two nested loops

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(i !== j){
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

// two nested loops with optimizations

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// one loop with hashmap

var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      return [obj[target - nums[i]], i]
    } else {
      obj[nums[i]] = i;
    }
  }
};

// two pointer method with missing edge cases

var twoSum_sort = function (nums, target) {
  const clone = [...nums];
  nums.sort((a, b) => a - b);

  let low = 0, high = nums.length - 1;

  while (low < high) {
    if (nums[low] + nums[high] < target) {
      low++;
    } else if (nums[low] + nums[high] > target) {
      high--;
    } else {
      return [clone.indexOf(nums[low]), clone.indexOf(nums[high])];
    }
  }
}

// two pointer method, edge cases covered

var twoSum = function (nums, target) {
  const clone = [...nums];
  nums.sort((a, b) => a - b);
  let low = 0, high = nums.length - 1;
  while (low < high) {
    if (nums[low] + nums[high] < target) {
      low++;
    } else if (nums[low] + nums[high] > target) {
      high--;
    } else {
      if (nums[low] === nums[high]) {
        return [clone.indexOf(nums[low]), clone.indexOf(nums[high], clone.indexOf(nums[low]) + 1)];
      }
      return [clone.indexOf(nums[low]), clone.indexOf(nums[high])];
    }
  }
}
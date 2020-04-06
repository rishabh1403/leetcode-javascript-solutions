var createTargetArray = function(nums, index) {
    
  return index.reduce((acc,el,idx) => {
      return [...acc.slice(0,el), nums[idx], ...acc.slice(el)]
  },[])
};
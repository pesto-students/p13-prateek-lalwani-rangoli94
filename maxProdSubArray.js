function maxProductSubarray(elements) {
    let prefix = 1
    let suffix = 1
    let nums = elements.split(",").map((ele) => Number(ele))
    let n = nums.length
    let max = Number.NEGATIVE_INFINITY
    for(let i=0; i<n; i++) {
         prefix = nums[i] * prefix
      suffix = nums[n-i-1] * suffix
  
      max = Math.max(max,prefix,suffix,nums[i],nums[n-i-1])
  
      if(nums[i] == 0 ) { prefix = 1; }
      if(nums[n-i-1] == 0) { suffix = 1; }
    }
    return max
  }
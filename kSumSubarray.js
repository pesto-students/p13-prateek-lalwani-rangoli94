function hasSubarrayWithSumK(arr, k) {
    const set = new Set()
    let sum = 0
  
    for(let i=0;i <arr.length; i++) {
      sum+=arr[i]
      
      if(set.has(sum-k) || sum==k) {
        return true
      } else {
        set.add(sum)
      }
    }
    return false
  
  }
function findSumOfMaxAndMin(arr) {
    max = arr[0]
    min = arr[0]
    for(let i=1; i<arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i]
      }
      if(arr[i] < min) {
        min = arr[i]
      }
    }
    return max+min
  }
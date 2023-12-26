function firstIndexOfOccurrenceRecursive(arr, target, index) {
    if(index==arr.length) {
      return -1
    }
    let smallOutput = firstIndexOfOccurrenceRecursive(arr,target,index+1)
    if(arr[index] == target) {
      return index
    } 
    return smallOutput
  }
  
  
  function firstIndexOfOccurrenceMain(arr, target) {
    return firstIndexOfOccurrenceRecursive(arr,target,0)
  }
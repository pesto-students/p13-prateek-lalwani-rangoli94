function indicesRecursive(arr, target, index) {
	if(arr.length == index) {
  	return []
  }
  
  if(arr[index] == target) {
  	return [index, ...indicesRecursive(arr, target, index+1) ]
  }
  
  return indicesRecursive(arr, target, index+1)
}

function indicesMain(arr, target) {
   return indicesRecursive(arr,target, 0)
 }
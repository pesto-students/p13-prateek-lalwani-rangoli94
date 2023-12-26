function selectionSortStrings(arr) {
	const n = arr.length
	for(let i=0; i< n-1; i++) {
  	let smallestIdx = i
    for(let j=i; j<n; j++) {
    	if(arr[j][0] < arr[smallestIdx][0]) {
      	smallestIdx = j
      }
    }
    [arr[smallestIdx], arr[i]] = [arr[i], arr[smallestIdx]]
  }
	return arr
}

console.log(selectionSort(["zebra","lion","tiger","elephant"]))


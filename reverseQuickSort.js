function findPivot(arr, l, r) {
    let pivot = arr[r]
    let smallIdx = l
    for(let i=l; i<r; i++) {
        if(arr[i] > pivot) {
            [arr[smallIdx], arr[i]] = [arr[i], arr[smallIdx]]
            smallIdx++
        }
    }
    
    [arr[smallIdx], arr[r]] = [arr[r], arr[smallIdx]]
    return smallIdx
}

function quickSortHelper(arr, l, r) {
    if(l>=r) {
        return
    }
    let pivotIdx = findPivot(arr, l, r)
    quickSortHelper(arr, l, pivotIdx-1 )
    quickSortHelper(arr, pivotIdx+1, r )
    
}

function quickSort(arr) {
 quickSortHelper(arr, 0, arr.length -1)
 return arr
}
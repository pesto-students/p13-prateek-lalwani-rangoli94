function replaceKey(arr, oldKey, newKey) {
    for(let i=0;i < arr.length; i++) {
      if(arr[i] == oldKey) {
        arr[i] = newKey
      }
    }
    return arr
  }
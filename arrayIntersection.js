function findIntersection(arr1, arr2) {
    let common = [];
    for(let i=0; i<arr1.length; i++) {
      if(arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
        common.push(arr1[i])
      }
    }
    return common
  }
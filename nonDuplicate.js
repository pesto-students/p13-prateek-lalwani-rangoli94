function findNonDuplicateElement(arr) {
    for(let i=0; i< arr.length; i++) {
      let flag = 0
      if(arr[i] == 'x') {
      continue;
      }
      for(let j=i+1;j< arr.length; j++) {
        if(arr[i] == arr[j]) {
          arr[j] = 'x'
          flag = 1
          break
        }
      }
      if(flag == 0) {
        return arr[i]
      }
    }
  }

  console.log(findNonDuplicateElement([1,1,2,2,3,4,4]))
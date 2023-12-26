function deleteDivisibleElements(arr) {
    i=0;
  
    while(arr[i]!=undefined) {
      if(arr[i]%2==0 || arr[i]%3==0) {
        arr.splice(i,1)
      } else {
        i++
      }
    }
    return arr
  }
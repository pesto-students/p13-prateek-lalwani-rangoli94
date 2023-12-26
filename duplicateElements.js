/**
 * @param {number[]} arr
 * @return {number}
 */
function findNonDuplicateElement(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
    let num
    for(let i=0; i< arr.length; i++){
      //let num = arr[i]
      let flag = 0
      for(let j=i+1; j< arr.length; j++ ) {
        if(arr[i]==arr[j]) {
          flag = 1
          break;
        }
      }
      if(flag == 0) {
        return arr[i]
      }
    }
  }
  
  
  
  
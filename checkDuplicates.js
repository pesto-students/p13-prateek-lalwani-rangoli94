function checkDuplicates(array) { 
    const duplicateSet = new Set()
 
    for(let i=0; i<array.length; i++) {
     if(duplicateSet.has(array[i])) {
         return "There are duplicate elementsin the array."
     } else {
         duplicateSet.add(array[i])
     }
    }
     
 }
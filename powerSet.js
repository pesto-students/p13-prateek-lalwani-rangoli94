function powerSetRecursive(nums, index) {
    if(nums.length==index ) {
        return [[]]
    }
    let smallOutput = powerSetRecursive(nums, index+1)
    let result = []
    for(let i=0; i< smallOutput.length; i++) {
                result.push([nums[index],...smallOutput[i]])
      }  
    result.push(...smallOutput)
    return result
  }
  
  
  
  function powerSetMain(input) {
    input = input.split(" ").map(num => Number(num))
    return powerSetRecursive(input, 0)
  }
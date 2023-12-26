function groupAnagrams(strs) {
    const map = new Map()
    const result = []
  
    for(let i=0;i <strs.length; i++) {
      let sortedStrs = strs[i].split("").sort().join("")
      if(map.has(sortedStrs)) {
        map.set(sortedStrs, [...map.get(sortedStrs), strs[i]])
      }else {
        map.set(sortedStrs, [strs[i]])
      }
    }
  
    for(let [key,value] of map) {
      result.push(value)
    }
    return result
  }
  
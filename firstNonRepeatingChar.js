function findFirstNonRepeatingCharacter(str) {
    const map = new Map()
  
    for(let i=0; i<str.length; i++) {
      if(map.has(str[i])) {
        map.set(str[i],map.get(str[i])+1)
      } else {
        map.set(str[i],1)
      }
    }
  
    for(let [key,value] of map) {
      if(value == 1) {
        return key
      }
    }
    return "No non-repeating characters found"
  }
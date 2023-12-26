function longestSubarrayWithEqualVowelsAndConsonants(chars) {

    let sum = 0
   let map = new Map()
   let maxStr = ""
   let maxLen = 0
   for(let i =0; i<chars.length; i++) {
       if(chars[i] == 'a' || chars[i] == 'e' || chars[i] == 'i' || chars[i] == 'o' || chars[i] == 'u' || chars[i] == 'A' || chars[i] == 'E' || chars[i] == 'I' || chars[i] == 'O' || chars[i] == 'U' ) {
           sum = sum-1
       } else {
           sum = sum+1
       }
       
       if(sum==0) {
           maxLen = i+1
       //  maxStr = chars.substring(0,i+1)
       }

       if(map.has(sum)) {
           if((i-map.get(sum)) > maxLen) {
               maxLen = i-map.get(sum)
              // maxStr = chars.substring((map.get(sum))+1,i+1)
           }
       } else {
           map.set(sum,i)
       }
   }
 //  console.log(maxStr)
   return maxLen
 }
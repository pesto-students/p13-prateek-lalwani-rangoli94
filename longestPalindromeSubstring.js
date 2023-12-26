var palindromeChecker = function(s,left,right) {

    while(left>=0 && right<s.length && s[left]==s[right]) {

            left--
            right++
        }

            return  s.substring(left+1,right)
};


  function longestPalindromicSubstring(s) {
     let maxLen = 0
    let result = ""

    for(let i=0; i<s.length; i++) {

        let str = palindromeChecker(s,i,i)
        if(str.length>maxLen) {
            maxLen = str.length
            result = str
        }


        str = palindromeChecker(s,i,i+1)

        if(str.length>maxLen) {
            maxLen = str.length
            result = str
        }

    }
    return result
  }
function reverse(number) {
    let rev = 0
    while(number != 0) {
      digit = number%10
      number = Math.floor(number/10)
      rev = rev*10 + digit
    }
    return rev
  }
  
  function isPalindrome(number) {
    if (reverse(number) == number) {
      return true
    }
    return false
  }
  
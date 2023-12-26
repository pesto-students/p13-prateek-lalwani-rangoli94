function reverse(number) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    let rev = 0
    while(number != 0) {
      rev = rev*10 + number%10
      number = Math.floor(number/10)
    }
    return rev
  }

  console.log(reverse(1234))
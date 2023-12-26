function isLeapYear(year) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    if (year%100 == 0) {
      if(year%400 == 0) {
        return true
      }
      return false
    }
    if(year%4 == 0) {
      return true
    }
    return false
  }
  
  console.log(isLeapYear(2021))
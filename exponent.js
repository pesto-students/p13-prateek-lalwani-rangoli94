function exponentiation(x, p) {
    if(p==0) {
      return 1
    }
    if(p<0) {
        return 1/exponentiation(x,-p)
    }
    let prevOutput = exponentiation(x,Math.floor(p/2))
    if(p%2==0) {
      return prevOutput*prevOutput
    } 
    return x*prevOutput*prevOutput
  }
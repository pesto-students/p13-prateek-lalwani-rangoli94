/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function calculateHCF(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_HCF_BODY
    
    let q = a < b ? a : b
    let div = a > b ? a : b
    while(q>0 && div>0) {
    //while(true) {
      let rem = div%q
      if(rem == 0) {
        return q
      }
      div = q
      q = rem
    }
    
    
    /*while (a > 0 && b > 0) {
          if (a > b) {
              a = a % b;
          }
          else {
              b = b % a;
          }
      }
      if (a == 0) {
          return b;
      }
      return a;
     */ 
  }
  
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  function calculateLCM(a, b) {
    // PLACEHOLDER_JAVASCRIPT_CALCULATE_LCM_BODY
    return ((a * b) / calculateHCF(a,b))
  }
  
  
  
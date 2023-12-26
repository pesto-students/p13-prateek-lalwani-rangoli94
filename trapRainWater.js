function trapRainWater(heights) {
    let water = 0;
    
    let n =heights.length
    max_Left = new Array(n).fill(0)
    max_Right = new Array(n).fill(0)
    max_Left[0] = heights[0]
    max_Right[n-1] = heights[n-1]
    for(let i=1; i<n; i++) {
      max_Left[i] = Math.max(max_Left[i-1],heights[i])
    }
    for(let i=n-2; i>=0;i--) {
      max_Right[i] = Math.max(max_Right[i+1],heights[i])
    }
    for(let i=1; i<n-1; i++ ) {
        if(Math.min(max_Left[i-1],max_Right[i+1]) - heights[i] > 0) {
          water += Math.min(max_Left[i-1],max_Right[i+1]) - heights[i]
      }
          
    }
    return water
  }
  
  console.log(trapRainWater([0,1,0,3,0,2,0]))
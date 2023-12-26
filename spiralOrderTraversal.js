function spiralOrderTraversal(matrix) {
	let output = []
	let n = matrix.length
  let m = matrix[0].length
  let left = 0
  let right = m-1
  let top = 0
  let bottom = n-1
  
  while(output.length< (n*m) ) {
  	for(let i=left; i<=right; i++) {
    	output.push(matrix[top][i])
    }
    top++
    for(let i=top; i<= bottom; i++) {
    	output.push(matrix[i][right])
    }
    right--
    if(bottom>=top) {
      for(let i=right; i>=left; i--) {
        output.push(matrix[bottom][i])
      }
      bottom--
    }
    if(right>=left) {
      for(let i=bottom; i>=top; i--) {
        output.push(matrix[i][left])
      }
      left++
    }
  }
  return output.join(" ")
}

function transposeMatrix(matrix) {
    let n = matrix.length
 let m = matrix[0].length
 let mat = new Array(n).fill(0)
 let newMatrix = []
 for(i=0;i<m;i++) {
     newMatrix.push([...mat])
 }


 for(i=0;i<n;i++) {
      for(j=0;j<m;j++) {
              newMatrix[j][i] = matrix[i][j]
      }
  } 
  return newMatrix
}
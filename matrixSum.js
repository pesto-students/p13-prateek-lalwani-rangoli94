function sumOfTwoMatrices(rows, cols,array1, array2) {
    if(array1.length != array2.length) {
       // throw Error("Arrays must have the same dimensions")
       return ("Arrays must have the same dimensions")
    }
    let sumMatrix = []
    for(let i=0; i<rows; i++) {
        sumMatrix.push([...new Array(cols).fill(0)])
    }
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols; j++) {
            sumMatrix[i][j] = array1[i*cols+j] + array2[i*cols+j]
        }
    }
    return sumMatrix
}
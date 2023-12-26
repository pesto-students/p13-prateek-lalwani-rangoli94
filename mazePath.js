function mazePathRecursive(row, col, numRows, numCols, currentPath, result) {
   if(row==numRows-1 && col==numCols-1) {
        result.push(currentPath)
        return
    }
    
    if(row < numRows) {
      mazePathRecursive(row+1, col,numRows, numCols,currentPath+"D", result)
    }

    if(col < numCols ) {
      mazePathRecursive(row, col+1,numRows, numCols, currentPath + "R", result)
    }

    
    return
}

function mazePathMain(numRows, numCols) {
    const result = []
    mazePathRecursive(0,0,numRows, numCols, "", result)
    return result
}

console.log(mazePathMain(3,3))
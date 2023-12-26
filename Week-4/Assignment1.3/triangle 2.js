function drawTriangle(triangleSize) {
    for (let i = 0; i < triangleSize; i++) {
        let str = "* "
        for (let j = 0; j < i; j++) {
            str += "* "
        }
        console.log(str)
    }

}

drawTriangle(4)
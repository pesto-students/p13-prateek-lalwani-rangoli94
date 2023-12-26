function maxPointsOnLine(points) {
    let map = {}
    for(let i=0; i< points.length-1; i++) {
        let point1 = points[i]
        let slope;
        for(let j=i+1; j<points.length; j++) {
            let point2 = points[j]
            if(point1[0] == point2[0]) {
                slope = Number.MAX_VALUE
            } else {
                slope = (point1[1] - point2[1]) / (point1[0] - point2[0])
            }

            if(map[slope]) {
                map[slope].push(point2)
            } else {
                map[slope] = [i,j]
            }
        }
    }
    let currentMax = 0
    for(let key in map) {
        currentMax = Math.max(currentMax, map[key].length)
    }

    return currentMax
}
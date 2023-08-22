function counter() {
    let count = 1;
    function incrementCount() {
        return count++
    }
    return incrementCount
}

firstCounter = counter()
secondCounter = counter()

firstValues = []
secondValues = []

firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());

secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

console.log("firstValues array: [" + firstValues + "] secondValues array: [" + secondValues + "]")
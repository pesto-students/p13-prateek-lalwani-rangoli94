function convertArrayToSymbol() {
    const arr = ['hello', 'world', 'test'];
    return function* generateIterator() {
        for (let i = 0; i < arr.length; i++) {
            yield (Symbol(arr[i]))
        }
    }
}

const generator = convertArrayToSymbol()

for (const sym of generator()) {
    console.log(sym)
}




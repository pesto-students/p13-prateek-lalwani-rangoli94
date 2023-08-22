function calcWordFrequencies() {
    let str = prompt("")
    let arr = str.split(" ");
    let dict = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (dict.has(arr[i])) {
            dict.set(arr[i], dict.get(arr[i]) + 1)
        }
        else {
            dict.set(arr[i], 1);
        }
    }
    dict.forEach((val, key) => {
        console.log(key + " " + val)
    })
}

calcWordFrequencies()
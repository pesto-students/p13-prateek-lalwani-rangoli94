function printAllPermutations(str) {
    permute(str, "")
}

function permute(str, permutation) {
    if(str.length == 0) {
        console.log(permutation)
        return
    }
    for(let i=0; i<str.length; i++) {
        let ch = str[i]
        let newStr = str.substring(0,i) + str.substring(i+1,str.length)
        permute(newStr, ch + permutation)
    }
    
}


printAllPermutations("abc")
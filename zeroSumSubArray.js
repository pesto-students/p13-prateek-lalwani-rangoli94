function findLongestSubarray(arr) {
    const map = new Map()
    let sum = 0
    let last_idx = -1
    let maxLen = 0

    for(let i=0;i<arr.length; i++) {
        if(arr[i] == 0) {
            sum+=-1
        } else {
            sum+=1
        }
        if(sum == 0) {
            maxLen = i+1
            last_idx = i
        }
        if(map.has(sum)) {
            maxLen = Math.max(i-map.get(sum),maxLen)
            last_idx = (i-map.get(sum)) > maxLen ? i : last_idx
        } else {
            map.set(sum,i)
        }
    }
    return maxLen
}

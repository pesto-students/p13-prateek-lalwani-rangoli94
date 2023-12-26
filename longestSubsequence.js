function findLongestConsecutiveSubsequence(arr) {

    const setNum = new Set()
    let maxLen = 0
    for(let i=0; i<arr.length; i++) {
        setNum.add(arr[i],1)
    }

    for(const ele of setNum) {
        if(setNum.has(ele-1)) {
            continue
        }
        let seq = ele
        let len = 0
        while(setNum.has(seq)) {
            len++
            seq++
        }
        maxLen = Math.max(maxLen,len)
    }
    return maxLen
  }
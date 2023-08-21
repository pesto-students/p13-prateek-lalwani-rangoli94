function sortArray(arr) {
    arr.sort(function (a, b) { return a - b })
    return arr;
}

function printOutput(arr, type) {
    console.log(type + ":")
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function divideArray(nums) {
    let even = [];
    let odd = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            even.push(nums[i]);
        }
        else {
            odd.push(nums[i]);
        }
    }
    even = sortArray(even);
    odd = sortArray(odd);
    printOutput(even, "Even numbers");
    printOutput(odd, "Odd numbers")

}

let nums = [4, 2, 9, 1, 8];
divideArray(nums)
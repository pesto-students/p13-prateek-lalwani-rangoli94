var productExceptSelf = function(nums) {
    let left=1;
    let result=new Array(nums.length).fill(1);
    for(let i=0;i<nums.length;i++){
        result[i]=result[i]*left;
        left=left*nums[i];
    }
    let right=1;
    for(let j=nums.length-1;j>=0;j--){
        result[j]=result[j]*right;
        right=right*nums[j]
    }
    return result
};
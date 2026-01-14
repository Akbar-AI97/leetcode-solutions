// Use binary search 
function search(nums: number[], target: number): number {
    let low: number = 0; // first index
    let high: number = nums.length-1; // last index

    while(low <= high) {
        let middle: number = Math.floor((low + high) / 2);
        let myGuess: number = nums[middle]; // take the value at this index to check if it is = target value
        if(myGuess == target) {
            return middle;
        } else if (myGuess > target) {
            high = middle - 1; // check the left half
        } else {
            low = middle + 1; // check the right half
        }
    }
    return -1; // target value does'nt exist
};


const result: number = search([-1,0,3,5,9,12], 9);
console.log(result);
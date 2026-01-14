/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    // const nums = [8,2];
    const numsObjects = []; 

    for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const binary = value.toString(2);
    const binaryRefl = value.toString(2).split('').reverse().join(''); 
    const binaryReflValue = parseInt(binaryRefl, 2);
    
    //form an object containing all the values needed
    const obj = {
        value: value,
        binary: binary,
        binaryRefl: binaryRefl,
        binaryReflValue: binaryReflValue
    }
    numsObjects.push(obj); // create array of objects
    }
    // console.log(numsObjects);

    //sort array of objects by a key of 'key:value' pairs
    const numsObjectsSorted = numsObjects.sort((a,b) => {
    //if only 'binaryReflValues' are equal then sort by 'values'
    if(a.binaryReflValue == b.binaryReflValue) {
        return a.value - b.value;
    } else {
        return a.binaryReflValue - b.binaryReflValue;
    }
    });
    // console.log(numsObjectsSorted);

    const numsSorted = [];
    for (let i = 0; i < nums.length; i++) {
    numsSorted.push(numsObjectsSorted[i].value);
    }
    return numsSorted; //return nums sorted by their binary reflections
};
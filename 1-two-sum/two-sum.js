/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//APPROACH: a hash map (object) to achieve a linear time complexity of O(n). 
//Time Complexity: O(n), as it only requires a single pass through the array.
//Space Complexity: O(n), to store the numbers in the hash map. 

//map.has(el) => checks if 'el' exists in the map
//map.get(el) => returns the index of 'el'
//map.set(el, index of el) => adds "key:value" pair to the array map

var twoSum = function(nums, target) {
    const map = new Map(); //create object of map(empty at the beginning)
  
    for(let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]; //get complement via difference of target & nums[i]

      if(map.has(complement)) { //check if complement exists in the map
        return [map.get(complement), i];
      } else {
        map.set(nums[i], i); //add "key:value" => "nums[i]:i" to the map
      }
    }
};
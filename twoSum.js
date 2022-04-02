const twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++){

     for(let j = i + 1; j < nums.length; j++){
       
       if(nums[i] + nums[j] === target){
         let total = [nums[i], nums[j]]
          return total
       } else {
         return false
       }
     }
    } 
};


console.log(twoSum([5,6,7,9], 11))
// O(n^2) try to make it O(n) with hash map

module.exports = twoSum
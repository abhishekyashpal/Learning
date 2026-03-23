function uniqueSubsets(nums) {
    nums.sort((a, b) => a - b);  // Sort the array to handle duplicates
    let results = [];
    
    function backtrack(start, comb) {
        results.push([...comb]);
        
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;  // Skip duplicates
            }
            comb.push(nums[i]);
            backtrack(i + 1, comb);
            comb.pop();
        }
    }
    
    backtrack(0, []);
    return results;
}

// Example usage:
let arr = [1, 2, 2];
console.log(uniqueSubsets(arr)); // Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]

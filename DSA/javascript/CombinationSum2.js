function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);  // Sort the array to handle duplicates
    let results = [];
    
    function backtrack(start, target, path) {
        if (target === 0) {
            results.push([...path]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;  // Skip duplicates
            }
            
            if (candidates[i] > target) {
                break;  // Early termination since array is sorted
            }
            
            path.push(candidates[i]);
            backtrack(i + 1, target - candidates[i], path);
            path.pop();
        }
    }
    
    backtrack(0, target, []);
    return results;
}

// Example usage:
let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(combinationSum2(candidates, target)); 
// Output: [ [1, 1, 6], [1, 2, 5], [1, 7], [2, 6] ]

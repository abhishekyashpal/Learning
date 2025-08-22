function subsetSums(arr) {
    let results = [];
    
    // Helper function to calculate sums of subsets
    function findSubsetSums(index, currentSum) {
        if (index === arr.length) {
            results.push(currentSum);
            return;
        }
        
        currentSum+=arr[index]
        // Include the current element
        findSubsetSums(index + 1, currentSum);
        
        currentSum-=arr[index]
        // Exclude the current element
        findSubsetSums(index + 1, currentSum);
    }
    
    findSubsetSums(0, 0);

    // Sort the results in increasing order
    results.sort((a, b) => a - b);
    
    return results;
}

// Example usage:
let arr = [1, 2, 3];
console.log(subsetSums(arr)); // Output: [ 0, 1, 2, 3, 3, 4, 5, 6 ]

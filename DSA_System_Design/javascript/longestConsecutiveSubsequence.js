function longestConsecutiveSubsequence(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let currentCount = 1;
    let maxCount = 1;
    arr.sort((a, b) => a - b);
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == arr[i-1]+1) {
            currentCount++;
        } else if(arr[i] != arr[i-1]) {
            currentCount = 1;
        }
        maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
}

// Example usage:
const arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSubsequence(arr)); // Output: 4
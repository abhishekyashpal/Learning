function findPairWithSum(arr, targetSum) {
    let left = 0;
    let right = arr.length-1;

    while(left < right) {
        
        let currentSum = arr[left] + arr[right];

        if(currentSum === targetSum) {
            return [arr[left], arr[right]];
        } else if(currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 10;

const result = findPairWithSum(sortedArray, targetSum);
if (result) {
    console.log(`Pair found: ${result[0]} and ${result[1]}`);
} else {
    console.log('No pair found');
}
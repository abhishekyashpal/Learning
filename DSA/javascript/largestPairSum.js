function findLargestPairSum(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }
    let first = -Infinity;
    let second = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(first < arr[i]) {
            second = first;
            first = arr[i]
        } else if(second < arr[i]) {
            second = arr[i]
        }
    }
    return [first, second];
}

// Example usage:
const array = [10, 14, 2, 23, 19];
console.log(findLargestPairSum(array)); // Output: 42 (23 + 19)
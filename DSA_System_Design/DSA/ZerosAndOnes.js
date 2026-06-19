function segregateZerosAndOnes(arr) {

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] === 0) {
            left++;
        } else if(arr[right] === 1) {
            right--;
        } else if(arr[left] === 1 || arr[right] === 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
}

// Example usage:
let array = [0, 1, 0, 1, 1, 0, 1, 0];
console.log(segregateZerosAndOnes(array)); // Output: [0, 0, 0, 0, 1, 1, 1, 1]

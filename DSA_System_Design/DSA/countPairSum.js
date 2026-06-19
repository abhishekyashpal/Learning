function countPairs(arr1, arr2, k) {
    let count = 0;
    let i = 0;
    let j = arr2.length-1;
    while(i < arr1.length && j >=0) {
        let sum = arr1[i] + arr2[j];       
        if(sum === k) {
            count++;
            i++;
            j--;
        } else if(sum < k) {
            i++;
        } else if( sum > k) {
            j--;
        }
    }
    return count;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 5, 6];
const x = 7;

console.log(countPairs(arr1, arr2, x)); // Output: 3
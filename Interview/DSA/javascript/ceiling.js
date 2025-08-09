function findCeiling(arr, x) {

    let left = 0;
    let right = arr.length-1;
    let ceiling = -1;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);left
        if(arr[mid] === x) {
            ceiling = arr[mid];
        } else if(arr[mid] < x) {
            left = mid+1;
        } else {
            ceiling = arr[mid];
            right = mid-1;
        }
    }
    return ceiling;
}

// Example usage:
const sortedArray = [1, 2, 4, 6, 8, 10];
const target = 4;
const result = findCeiling(sortedArray, target);
console.log(`Ceiling of ${target} in the array is: ${result}`);
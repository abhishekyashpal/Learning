function findMaximum(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        if(left === right) {
            return arr[left];
        } 
        let mid = Math.floor((left+right)/2);

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) {
            return arr[mid];
        } else if(arr[mid] < arr[mid+1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Example usage:
let arr = [1, 3, 8, 12, 4, 2];
console.log("Maximum element:", findMaximum(arr)); // Output: 12
function dutchNationalFlag(arr) {
    let left = 0;
    let mid = 0;
    let right = arr.length-1;
    

    while(mid <= right) {
        switch(arr[mid]) {
            case 0:
                [arr[left], arr[mid]] = [arr[mid], arr[left]];
                left++, mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [arr[right], arr[mid]] = [arr[mid], arr[right]];
                right--;
                break;     
        }
    }
    return arr;
}

// Example usage:
let arr = [2, 0, 1, 2, 1, 0];
console.log(dutchNationalFlag(arr));  // Output: [0, 0, 1, 1, 2, 2]
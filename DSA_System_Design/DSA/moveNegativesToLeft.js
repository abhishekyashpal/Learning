function moveNegativesToLeft(arr) {

    let left = 0;
    let right = arr.length-1;

    while(left < right) {
        if(arr[left] < 0 && arr[right] < 0) {
            left++;
        } else if(arr[left] < 0 && arr[right] > 0) {
            left++;
            right--;
        } else if(arr[left] > 0 && arr[right] > 0) {
            right--;
        } else if(arr[left] > 0 && arr[right] <0) {
            let temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left++;
            right--;
        }
    }
    return arr;
}

let array = [1, -3, 5, 6, -3, -2, 7, -9, -8];
console.log("Original Array:", array);
console.log("Array with negatives moved to left:", moveNegativesToLeft(array));
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2)
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < arr[mid]) {
            end = mid;
            mid = Math.floor((start+end)/2)
        } else if(arr[i] > arr[mid]) {
            start = mid;
            mid = Math.floor((start+end)/2)
        } else if(arr[i] === arr[mid]) {
            return arr[mid];
        }
    }
    return arr[mid];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 3;

console.log(binarySearch(arr, target))
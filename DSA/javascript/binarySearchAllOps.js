function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;
   
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            left = mid+1;
        } else if(arr[mid] > target) {
            right = mid-1;
        }
    }

    return -1;
}

// // Example usage:
let sortedArray = [1, 3, 5, 7, 9];

console.log("Sorted Array:", sortedArray);

// // Perform search
let searchElement = 10;
console.log(`Index of ${searchElement} is:`, binarySearch(sortedArray, searchElement));

function insertIntoSortedArray(arr, element) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > element) {
            arr.splice(i, 0, element);
            return arr;
        }
    }
    arr.push(element)
    return arr;
}
function insertIntoSortedArray(arr, element) {
    let index = 0;
    while (index < arr.length && arr[index] < element) {
        index++;
    }
    arr.splice(index, 0, element);
}
// Perform insertion
let insertElement = 10;
insertIntoSortedArray(sortedArray, insertElement);
console.log(`After inserting ${insertElement}, the array is:`, sortedArray);

function deleteFromSortedArray(arr, element) {
    let index = binarySearch(arr, element);
    if(index !== -1) {
        arr.splice(index, 1)
    }
}

// Perform deletion
let deleteElement = 4;
deleteFromSortedArray(sortedArray, deleteElement);
console.log(`After deleting ${deleteElement}, the array is:`, sortedArray);
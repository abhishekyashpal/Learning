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
let searchElement = 10;
console.log(binarySearch(sortedArray, searchElement));

////////////////////////////////////////////////////////////////////////////////

function insertIntoSortedArray(arr, element) {
    let left = 0;
    let right = arr.length;

    // binary search for correct position
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < element) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    arr.splice(left, 0, element);
    return arr;
}

// Perform insertion
let insertElement = 10;
insertIntoSortedArray(sortedArray, insertElement);
console.log( sortedArray);

////////////////////////////////////////////////////////////////////////////////

function deleteFromSortedArray(arr, element) {
    let index = binarySearch(arr, element);

    if (index === -1) return false;

    arr.splice(index, 1);
    return true;
}
/// to handle duplicates
function deleteAllOccurrences(arr, element) {
    let left = lowerBound(arr, element);
    let right = upperBound(arr, element);

    if (left === right) return arr; // not found

    arr.splice(left, right - left);
    return arr;
}

// Perform deletion
let deleteElement = 4;
deleteFromSortedArray(sortedArray, deleteElement);


//////////////////////////Lower Bound//////////////////////////////////////////////

function lowerBound(arr, target) {
    let left = 0, right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

lowerBound([1, 2, 2, 2, 3], 2) // 1

//////////////////////////Upper Bound//////////////////////////////////////////////

function upperBound(arr, target) {
    let left = 0, right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

upperBound([1, 2, 2, 2, 3], 2) // 4

function findLargestThree(arr) {
    if(arr.length<3) {
        return 'minimum 3 elements is requored.'
    }
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        }
        else if(arr[i] > second) {
            third = second;
            second = arr[i];
        }
        else if(arr[i] > third) {
            third = arr[i];
        }
    }
    return [first, second, third];
}

const arr = [12, 45, 2, 9, 18, 33, 24];
const largestThree = findLargestThree(arr);
console.log(largestThree); // Output: [45, 33, 24]
function findSmallestNonRepresentable(arr) {
    arr.sort((a, b) => a - b);

    let res = 1;

    for(let i=0; i<arr.length && arr[i] <= res; i++) {
        res += arr[i];
    }

    return res;
}

// Example usage:
let arr = [1, 2, 3, 10];
console.log(findSmallestNonRepresentable(arr)); // Output: 7
function chocolateDistributionProblem(arr, s) {
    let n = arr.length;

    if(n == 0 || s == 0)
        return 0;

    if(n < s)
        return -1;

    arr.sort((a, b) => a - b);
    let min_diff = Infinity;

    for(let i=0; i+s-1 < arr.length; i++) {
        diff = arr[i+s-1] - arr[i];
        if(diff < min_diff)
            min_diff = diff;
    }
    return min_diff;
}

// Example usage:
let arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
let m = 7; // Number of students
console.log("Minimum difference is " + chocolateDistributionProblem(arr, m));
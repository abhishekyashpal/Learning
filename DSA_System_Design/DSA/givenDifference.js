function givenDiff(arr, target) {
    let set = new Set();
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] - target)) {
            res.push([arr[i] - target, arr[i]]);
        }
        if (set.has(arr[i] + target)) {
            res.push([arr[i], arr[i] + target]);
        }
        set.add(arr[i]);
    }
    return res;
}

let arr = [1, 5, -9, -12, 8];
let targetDiff = 3;
let pair = givenDiff(arr, targetDiff);

if (pair) {
    console.log(`Pair found: ${pair[0]} and ${pair[1]}`);
} else {
    console.log(`No pair found with difference ${targetDiff}`);
}
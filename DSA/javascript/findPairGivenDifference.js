function findPairWithDifference(arr, targetDiff) {
    let set = new Set();

    for(let i=0; i<arr.length; i++) {
        if(set.has(arr[i] - targetDiff) || set.has(arr[i] + targetDiff)) {
            return [arr[i] - targetDiff, arr[i]];
        } else {
            set.add(arr[i])
        }
    }
    return null;
}

let arr = [1, 5, 9, 12, 8];
let targetDiff = 3;
let pair = findPairWithDifference(arr, targetDiff);

if (pair) {
    console.log(`Pair found: ${pair[0]} and ${pair[1]}`);
} else {
    console.log(`No pair found with difference ${targetDiff}`);
}
function givenSum(arr, target) {
    let set = new Set();
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (set.has(complement)) {
            res.push([complement, arr[i]]);
        }

        set.add(arr[i]);
    }

    return res;
}

let arr = [1, 5, -9, -12, 8];
let target = -4;

console.log(givenSum(arr, target));
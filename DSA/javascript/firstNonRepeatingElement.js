function firstNonRepeatingElement(arr) {
    let map = new Map();

    for(let i=0; i<arr.length; i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    // console.log('map', map);

    for(let [key, value] of map) {
        if(value === 1) {
            return key;
        }
    }
}

// Example usage:
let arr = [4, 5, 1, 2, 0, 4];
let result = firstNonRepeatingElement(arr);
console.log(result); // Output: 5
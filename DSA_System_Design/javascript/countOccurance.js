function count_ones(arr) {
    let map = new Map();
    for(let i=0; i<arr.length; i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }

    return map;

}

sorted_binary_array = [0, 0, 0, 1, 1, 1, 1, 1]
console.log(count_ones(sorted_binary_array))
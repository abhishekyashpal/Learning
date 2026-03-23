function sortInWaveform(arr) {
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length-1; i+=2) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

let arr = [1, 3, 4, 2, 5];
let waveformArr = sortInWaveform(arr);
console.log(waveformArr);  // Output: [2, 1, 4, 3, 5] or any similar waveform sorted array
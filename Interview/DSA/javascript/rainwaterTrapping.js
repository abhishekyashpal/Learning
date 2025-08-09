function rainWaterTrapping(arr) {
    if(arr.length === 0) {
        return 0;
    }

    let leftMax = new Array(arr.length).fill(0);
    let rightMax = new Array(arr.length).fill(0);

    leftMax[0] = arr[0];
    for(let i=1; i<arr.length; i++) {
        leftMax[i] = Math.max(arr[i], leftMax[i - 1])
    }

    rightMax[arr.length-1] = arr[arr.length-1];
    for(let i=arr.length-2; i >= 0; i--) {
        rightMax[i] = Math.max(arr[i], rightMax[i + 1])
    }

    let waterTrapped = 0;
    for (let i = 0; i < arr.length; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - arr[i];
    }

    return waterTrapped;
}

const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(rainWaterTrapping(heights)); // Output: 6
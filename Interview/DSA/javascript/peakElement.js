function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// Example usage with an array of more than 10 elements:
let nums = [1, 3, 20, 4, 1, 0, 8, 9, 6, 2, 7, 5];
let peakIndex = findPeakElement(nums);
console.log("Peak element index:", peakIndex);  // Output may vary depending on the peak found

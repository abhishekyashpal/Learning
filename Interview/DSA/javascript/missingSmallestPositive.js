function missingSmallestPositive(arr) {

    let positives = arr.filter((elem) => elem > 0);

    let missing = 1;

    while(positives.includes(missing)) {
        missing++;
    }
    return missing;
}

// Example usage
const arr = [3, 4, -1, 1];
console.log(missingSmallestPositive(arr)); // Output: 2
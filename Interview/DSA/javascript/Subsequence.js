function printSubsequences(arr, index = 0, subseq = []) {
    if (index === arr.length) {
        if (subseq.length > 0) {
            console.log('called');
            console.log(subseq, index);
        }
        return;
    }
    console.log('subseq-1', subseq, index);

    // Include the current element in the subsequence
    subseq.push(arr[index]);
    printSubsequences(arr, index + 1, subseq);
    console.log('subseq-2', subseq, index);

    // Exclude the current element from the subsequence
    subseq.pop();
    printSubsequences(arr, index + 1, subseq);
    console.log('subseq-3', subseq, index);
}

// Example usage
const arr = [1, 2];
printSubsequences(arr);

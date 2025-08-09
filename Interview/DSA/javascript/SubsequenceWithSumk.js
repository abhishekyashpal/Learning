function subsequenceSumk(arr, k, index=0, subseq=[], currSum=0) {

    if(index === arr.length) {
        if(currSum == k) {
            console.log(subseq);
        }
        return;
    }


    subseq.push(arr[index]);
    currSum+=arr[index];
    subsequenceSumk(arr, k, index+1, subseq, currSum);

    subseq.pop();
    currSum-=arr[index];
    subsequenceSumk(arr, k, index+1, subseq, currSum);
}


const arr = [1, 2, 3, 4, 5];
subsequenceSumk(arr, 5);
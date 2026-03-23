function CountsubsequenceSumk(arr, k, index=0, subseq=[], currSum=0) {

    if(index === arr.length) {
        return currSum == k ? 1:0;
    }

  //  subseq.push(arr[index]);
    currSum+=arr[index];
    let pickCount = CountsubsequenceSumk(arr, k, index+1, subseq, currSum);

   // subseq.pop();
    currSum-=arr[index];
    let notPickCount = CountsubsequenceSumk(arr, k, index+1, subseq, currSum);
    return pickCount + notPickCount;
}


const arr = [1, 2, 3, 4, 5];
console.log(CountsubsequenceSumk(arr, 5));

{
    math: 50,
    english: 40,
    science: 60,
    hindi: 80
}
function removeDuplicate(arr){
    let unique = [];
    for(let i=0; i<arr.length; i++) {
        if(!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }    
    return unique;
}

let array = [1, 2, 3, 4, 5, 6, 4];

console.log(removeDuplicate(array))
function findUnion(arr1, arr2) {
    let union = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length || j < arr2.length) {
        if(arr1[i] === arr2[j]) {
            union.push(arr1[i]);
            i++;
            j++;
        } else if(arr1[i] < arr2[j]){
            union.push(arr1[i]);
            i++;
        } else if(arr1[i] > arr2[j]) {
            union.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        union.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        union.push(arr2[j]);
        j++;
    }
   
    return union;
}

let arr1 = [1, 3, 4, 5, 7, 8, 9, 10];
let arr2 = [2, 3, 5, 6, 12, 13];

console.log("Union:", findUnion(arr1, arr2));
// console.log("Intersection:", findIntersection(arr1, arr2));
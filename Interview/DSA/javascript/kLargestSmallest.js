function findKLargest(arr, k) {
    if(k <= 0 || k > arr.length) {
        return null;
    }
    arr.sort((a, b) => b - a);
    return arr.slice(0, k);  
}
let arr1 = [3, 1, 7, 8, 2, 5];
let k1 = 3;
console.log(`Top ${k1} largest elements:`, findKLargest(arr1, k1));

function findKSmallest(arr, k) {
    if(k <= 0 || k > arr.length) {
        return null;
    }
    arr.sort((a, b) => a - b);
    return arr.slice(0, k);  
}
let arr2 = [3, 1, 7, 8, 2, 5];
let k2 = 3;
console.log(`Top ${k2} smallest elements:`, findKSmallest(arr2, k2));
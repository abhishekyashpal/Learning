function sortEvenOdd(arr) {

    let even = arr.filter(elem => elem % 2 === 0);
    let odd = arr.filter(elem => elem % 2 !== 0);
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);

    return [...even, ...odd];
}

// Example usage:
let numbers = [5, 2, 9, 12, 3, 7, 8, 4];
let sortedNumbers = sortEvenOdd(numbers);
console.log(sortedNumbers);  // Output: [2, 4, 8, 12, 9, 7, 5, 3]
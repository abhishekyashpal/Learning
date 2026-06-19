function minimumTotal(triangle) {
    if (triangle.length === 0) return 0;
    
    // Start from the second to last row and move upwards
    for (let row = 2; row <triangle.length; row++) {
        for (let col = 0; col < triangle.length; col++) {
            // Update the current element to be the sum of itself and the minimum of the two elements directly below it
            triangle[row][col] += Math.min(triangle[row][col-1], triangle[row - 1][col - 1]);
        }
    }
    
    // The top element now contains the minimum path sum
    return triangle[0][0];
}

// Example usage:
const triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
];
console.log(minimumTotal(triangle)); // Output: 11

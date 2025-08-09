function findElement(arr) {
    let n = arr.length;

    if(n < 3) {
        return null;
    }

    let leftMax = new Array(n).fill(0);
    let rightMin = new Array(n).fill(0);
    console.log('leftMax', leftMax);
    leftMax[0] = arr[0];
    for(let i = 1; i<n; i++) {
        console.log('leftMax', leftMax);
        leftMax[i] = Math.max(leftMax[i-1], arr[i])
    }

    rightMin[n-1] = arr[n-1];
    for(let i = n-2; i>=0; i--) {
        console.log('rightMin', rightMin);
        rightMin[i] = Math.min(rightMin[i+1], arr[i])
    }

    for(let i = 0; i<n; i++) {
        if(leftMax[i-1] <= arr[i] && arr[i] <= rightMin[i+1]) {
            return arr[i]
        }
    }

    return null; 
    
}

// Example usage:
let arr = [5, 1, 4, 3, 6, 8, 10, 7, 9];
let result = findElement(arr);
console.log("The element is:", result);
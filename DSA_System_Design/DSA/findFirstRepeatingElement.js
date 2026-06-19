function findFirstRepeatingElement(arr) {
    let unique = [];

    for(let i=0; i<arr.length; i++) {
        if(!unique.includes(arr[i])) {
            unique.push(arr[i])
        } else {
            return arr[i];
        }
    }
}

let arr = [1, 2, 3, 4, 3, 5, 6];
let firstRepeatingElement = findFirstRepeatingElement(arr);
console.log("The first repeating element is: " + firstRepeatingElement);

function findFirstRepeatingElement(arr) {
    let seen = new Set();

    for(let i=0; i<arr.length; i++) {
        if(seen.has(arr[i])) {
            return arr[i]
        } else {
            seen.add(arr[i])
        }
    }
    return null;
}

let arr1 = [1, 2, 3, 4, 3, 5, 6];
let firstRepeatingElement1 = findFirstRepeatingElement(arr);
console.log("The first repeating element is: " + firstRepeatingElement1);
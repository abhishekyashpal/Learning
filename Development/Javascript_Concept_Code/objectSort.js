let scores = {
    math: 50,
    english: 40,
    science: 60,
    hindi: 80
};

// Convert object entries to an array
let scoresArray = Object.entries(scores);

// Sort the array by the values in descending order
scoresArray.sort((a, b) => b[1] - a[1]);

// Extract the keys from the sorted array
//let sortedScores = Object.fromEntries(scoresArray);
let sortedKeys = scoresArray.map(entry => entry[0]);

console.log(sortedKeys);

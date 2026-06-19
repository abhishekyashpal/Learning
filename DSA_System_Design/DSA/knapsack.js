function knapSack(bag, weights, values) {
    let Knap = Array(values.length + 1).fill().map(() => Array(bag + 1).fill(0));

    for (let v = 0; v <= values.length; v++) {
        for (let w = 0; w <= bag; w++) {
            if (v === 0 || w === 0) {
                Knap[v][w] = 0;
            } else if (weights[v - 1] <= w) {
                Knap[v][w] = Math.max(values[v - 1] + Knap[v - 1][w - weights[v - 1]], Knap[v - 1][w]);
            } else {
                Knap[v][w] = Knap[v - 1][w];
            }
        }
    }

    return Knap[values.length][bag];
}

// Example usage:
const weights = [10, 20, 30];
const values = [60, 100, 120];
const bag = 50;

console.log(knapSack(bag, weights, values));  // Output: 220

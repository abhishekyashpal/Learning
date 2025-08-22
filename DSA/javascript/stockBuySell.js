function maxProfit(prices) {
    if (prices.length === 0) return 0;

    let minPrice = Infinity;
    let maxProfit = 0;

    for(let currentPrice of prices) {
        if(currentPrice < minPrice) {
            minPrice = currentPrice;
        } else if(currentPrice-minPrice > maxProfit) {
            maxProfit = currentPrice - minPrice;
        }
    }
    return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5
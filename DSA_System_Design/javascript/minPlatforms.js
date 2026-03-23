function minPlatforms(arrival, departure) {
    
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    let platform_needed = 1;
    let result = 1;
    let i = 1;
    let j = 0;

    while(i < arrival.length && j < departure.length) {

        if(arrival[i] <= departure[j]) {
            platform_needed++;
            i++;
            if(platform_needed > result) {
                result = platform_needed;
            }
        }
        else {
            platform_needed--;
            j++;
        }
        
    }
    return result;
}

// Example usage:
let arrivals = [900, 940, 950, 1100, 1500, 1800];
let departure = [910, 1200, 1120, 1130, 1900, 2000];

console.log(`Minimum number of platforms required: ${minPlatforms(arrivals, departure)}`);
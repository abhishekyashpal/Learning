function combinationSum(candidates, target) {
    let result = [];
    function backTrack(remain, comb, start) {
        if(remain === 0) {
            result.push([...comb])
        } else if(remain < 0) {
            return;
        }
        for(let i = start; i<candidates.length; i++) {
            comb.push(candidates[i]);
            backTrack(remain - candidates[i], comb, i);
            comb.pop();
        }
    }
    backTrack(target, [], 0);
    return result;
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));
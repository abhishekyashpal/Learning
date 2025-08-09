function lcs(str1, str2) {
    function lcsRecursive(m, n) {
        if (m === 0 || n === 0) {
            return 0;
        }
        if (str1[m - 1] === str2[n - 1]) {
            return 1 + lcsRecursive(m - 1, n - 1);
        } else {
            return Math.max(lcsRecursive(m - 1, n), lcsRecursive(m, n - 1));
        }
    }
    
    return lcsRecursive(str1.length, str2.length);
}

const str1 = "ABCBDAB";
const str2 = "BDCAB";

console.log(`Length of LCS is ${lcs(str1, str2)}`);

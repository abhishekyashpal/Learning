var a={},
    b={key1:'b'},
    c={key2:'c'}; 
a[b]=123; 
console.log(a[b]); // 456
a[c]=456; 

console.log(a[c]); // 456

// {
//    "[Object Object]": 456
// }
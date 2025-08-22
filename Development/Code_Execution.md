//////////////////////////////////////////////////////
console.log(5 + undefined) // Nan
console.log(5 + Nan) // Nan is not defined
console.log(5 + null) // 5
console.log(5 + '5') // 55
console.log('5' + 5) // 55
console.log('10' - 5) //5
console.log('5'*5) // 25
console.log('5'/5) // 1
console.log('5' + '5') // 55
console.log("5" + 9 + 10) // 5910
console.log(5 + 9 + '10') // 1410
////////////////////////////////////////////////////
If duplicate oaramters has been passed into the function the last paramter value would sustain for both variables if it is not passed in the argument will be treated as undefined.
/////////////////////////////////////////////////////
Primitive values (e.g., numbers, strings): When passed to a function, they are passed by value. Changes to these values within the function do not affect the original values outside the function.

Objects and arrays: When passed to a function, they are passed by reference. Changes to these within the function affect the original objects and arrays outside the function.

Reassigning an object inside the function does not affect the outer object reference.
//////////////////////////////////////////////////
var a={},
    b={key:'b'},
    c={key:'c'}; 
a[b]=123; 
a[c]=456; 
console.log(a[b]); // 456
console.log(a[c]); // 456
//////////////////////////////////
Rule: Function
If global variable is inside the function it can be encroached by outside global, let, var variable.
console.log(a)
/////////////////////////////////
let const - ReferenceError: Cannot access 'a' before initialization
a - ReferenceError: a is not defined
var a  - undefined
//////////////////////////
Next tick
Timeout - 0/empty
Immediate - 0/empty
---------------------
Next tick
Immediate
Timeout - with time value more than 0
///////////////
console.log(null == undefined) // true
console.log(null === undefined) // false
////////////////////////////////////////////////////////////
Task: Convert a callback hell into promise and then into async/await
// Promise method - all, allSettled, race
Promise.all() - You want to run multiple promises in parallel, and wait until all succeed. If any one fails, it rejects immediately.
Promise.allSettled() - You want to wait for all promises, regardless of whether they resolve or reject. You get the status and result of each.
race - You want the first promise to settle (resolve or reject). The rest are ignored.
/////////////////////////////////////////////////////////////
// Function
// named function
function add1(a, b) {
       let c = a+b;
      return c;
}
// anonymous function
let add2 = function(a, b) {
        let c = a+b;
       return c;
}
// Arrow Function
let add3 = (a, b)=> {
   let c = a+b;
   return c;
}
// IIFE - self invoked function or immediately invoked function
(function() {
   console.log('rajan')
})()

/////////for...of vs for...in
for...of
for...in  - iterate through the object - keys(), values()

////////////////////
const person = {
    name: 'rajan',
    printName: () => {
        return this.name // undefined
    }
    printName: () => {
        return person.name // rajan
    }
    printName: function () {
        return person.name // rajan
    }
    printName: function () {
        return this.name // rajan
    }
}

////////////////Group By object key in array of object////////////////
const grouped = items.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});
//////////////////////////For Loop(i<5) with setTimeout////////////
const gives the error inside the for loop
Scope of let: let is block-scoped. Each iteration of the loop creates a new binding of i.
Scope of var: var is function-scoped or globally scoped if declared outside any function. The same instance of i is used in every iteration of the loop.
Case1: 
let outside of for loop will give error and var will print the last value.
let - inside- 0, 1, 2, 3, 4, outside-error - new scope of i.
var - inside- 0, 1, 2, 3, 4, outside-5 - new scope of i.
Case2: setTimeout inside for loop
let - inside-0, 1, 2, 3, 4, outside-5 - new scope of i.
var - inside-5, 5, 5, 5, 5 outside-5 - updated scope of i.
Case3: setTimeout is in closure function
let/var - 0, 1, 2, 3, 4

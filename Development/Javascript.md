Object Copy?????
Shallow Copy
It copies the value as well as the reference.
Object assign(), spread operator
Deep Copy
It copies the value only not the reference
JSON.parse(JSON.stringify())
Limitation with method and can be resolved by using the lodash library.

What is this????? 
In JavaScript, the this keyword refers to the immediate object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object. Alone, this refers to the global object. In a function, this refers to the global object. In a function, in strict mode, this is undefined. In an event, this refers to the element that received the event. Methods like call(), apply(), and bind() can refer this to any object.

Arrow Function?????????
This arrow function reduces lots of code and makes the code more readable.
Arrow function syntax automatically binds “this” to the surrounding code’s context.
Writing the arrow => is more flexible as compared with the writing function keyword.
Limitations of using Arrow functions:
An arrow function doesn’t have its own bindings with this or super.
An Arrow function should not be used as methods.
An arrow function can not be used as constructors.
An arrow function can not use yield within its body.
Arrow function cannot be suitable for call apply and bind methods.

Regular function vs Arrow function??????????????
Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new target keyword.
Arrow functions cannot use yield within their body and cannot be created as generator functions.

Closure???????? 
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
function name() {
    let x = 'rajan';
    function displayName() {
        console.log(x);
    }
    displayName()
}
name(); --------------------------------------------------------------------------------------
Hoisting???
JavaScript Declarations are Hoisted. a variable can be used before it has been declared.
Variables defined with let and const are hoisted to the top of the block, but not initialized.
Using a let variable before it is declared will result in a ReferenceError.
JavaScript only hoists declarations, not initializations.
Unlike var, which can be accessed before it is declared, variables declared with let and constants declared using const cannot be accessed before their declaration.
Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.
x = 5;-----assignment
var x; ----------declarations
var x = 5; -----------initialization
--------------------------------------------------------------------------------------------------------
Recursion???? 
When call a function within itself.
Generator function????? 
Generator function has multiple returns with yield keyword in place of return. generator function is denoted by asteriks.

Currying function????? 
// console.log(add(1, 2, 3));
// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a+b+c;
//         }
//     }
// }
// console.log(add(1)(2)(3));

Function Borrowing: Call apply bind???? 
let fullName = function(address) {
    return `${this.name} ${address}`;
}
let person = {
    name: 'rahul',
}

Class, constructor and prototype??? 
Classes: Classes are blueprints of an Object. 
A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 
Prototype:  All JavaScript objects inherit properties and methods from a prototype.
you can not add a new property to an existing object constructor
The JavaScript prototype property allows you to add new properties and methods to object constructors:
Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
A class constructor is a special member function of a class that is executed whenever we create new objects of that class.

---------------------------------------------

Promise & Promise chaining????
A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.
promise - resolve and reject
all - if any API rejected all will be rejected.
allSettled - resolved and reject both the APIs
any - any API
race - first API gives the result
--------------------------------------
--------------------------------------------------------------
Async await??????????????????????????? 
async returns the promise and await will wait until the promise is being settled.
Callback & Callback Hell??????????????????? 
passing a function in another function as an argument is callback. nested callback is callbac hell.
ES6 update?????????????????????????????????
Class
Template Literal,
Destructuring Assignment
Default Values for Function Parameters
Arrow Functions
async await
let const with block scope
for...of loop
Rest parameters and spread operator
Primitive and non-primitive data type in JS????????????
primitive - native - string, number, boolean
non-primitive - derived - array, object
Strict mode?????????????????????????????????? 
undeclared variables gives the error.
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
this will be undefined.
Null vs undefined?????????????????????????????? 
null - Object
undefined - undefined
Spread Operator and Rest Paramater???????????
... - spread operator
...rest - rest parameter - function call doesn't have definite no of arguments then rest parameter is used with function definition.
Loops?????????????????????????????????????????????????? 
While
For... Of - Any Iterable
For... In - Object/Array
If... Else
Switch
For.... 
IIFE/Self Invoking Function, function declaration??????????
(function(){
      console.log('hello');
},)();
Try, catch, Finally???????????????????????????????????
try - success block
catch - error block
finally will be called in both the cases
finally returns undefined.
Then & catch method???????????????????????????????
then - promise resolved
catch - promise rejected.
Map and Set????????????????????????????????????????
Map - Object - key data type can be anything
Set - Array wih distinct values
forEach vs map????????
forEach - return the undefined.
map - return the new Array
prefix & postfix?????????
x++ - increases the number after being used
++x - first increase the number.
ECMAScript???????
Javascript by Netscape
Internet Explorer(JScript) by Microsoft
ECMAScript is a standard language. Javascript is built on top of ECMAScript.
JS V8 Engine?------------------------------------------------------------------------------
V8 is written in C++. Embedding V8 into C++ Application.
JS Engine converts JS code into machine code.
V8 - Chrome
Spider Monkey - Mozilla
javaScript Core - Apple
Chakra - Microsoft
Javascript Scope??????????---------------------------------------------------------------
Global, Block, Functional
Function Scope: A variable declared inside a function using var is function-scoped, meaning it's accessible anywhere within the function in which it is declared — regardless of blocks like if, for, or while.
Block Scope: A variable declared using let or const is block-scoped, meaning it's only accessible within the block {} in which it is defined (e.g., inside if, for, while, { }).
Global Scope:
A variable declared outside a function, becomes GLOBAL.

difference between promise and async-await????????
OOPS in Javascript????? 
Overloading- number of arguments, overriding, super- invoke the class constructor, static-only in class not in instances
Abstraction - It add a private method in child class from parent.
Polymorphism - parent method can be overridden in the child class.
Inheritance, 
Encapsulation - getter&setter
seal vs freeze in Object?????
seal() allows changes to the existing properties of an object. It prevents from deletion of existing properties but cannot prevent them from external changes. Object. freeze() does not allow so.

Inbuilt methods of Object, String and Array??

// keyword 'var' can be used to declare variables but this method has issues.
// according to ES6 recommendation, it is better to use 'let' keyword instead of 'var'

let rate = 0.1;
const interestRate = 0.2; // this is a constant. Trying to change it later, will throw error.
console.log(rate, interestRate);

/*
// primitive/value type variables
let name = 'Meemo'; // string
let age = 42; // number - all numbers (ints and floats) are of type 'number'
let isAlive = false; // boolean
let isMarried = undefined; // this is not very common
let isAwesome = null; // null is more common
*/

// put related variables in one object for cleaner code
let person = {
    name: 'Meemo',
    age: 42
};

// a function performing a task
function greetings(name) {
    console.log('Hello ' + name);
}

// a function calculating a value
function cube(num) {
    return num*num*num;
}

greetings('Meemo');
console.log(cube(99));
// JavaScript Functions
// A function is a reusable block of code that performs a specific task.
// Define it once, call it as many times as you need.

// ── Function Declaration ──────────────────────────────────────────────────
// Hoisted: can be called anywhere in the file, even before the declaration.

function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log(greet('Alice')); // "Hello, Alice!"
console.log(greet('Bob'));   // "Hello, Bob!"

// ── Function Expression ───────────────────────────────────────────────────
// A function stored in a variable. NOT hoisted — must be defined before use.

const add = function(a, b) {
  return a + b;
};

console.log(add(3, 4)); // 7

// ── Arrow Function (ES6) ──────────────────────────────────────────────────
// Shorter syntax. When the body is a single expression, return is implicit.

const multiply = (a, b) => a * b;
console.log(multiply(5, 6)); // 30

// Single parameter — parentheses are optional
const double = n => n * 2;
console.log(double(8)); // 16

// No parameters — empty parentheses are required
const sayHi = () => 'Hi there!';
console.log(sayHi()); // "Hi there!"

// Multi-line body — use curly braces and an explicit return
const clamp = (value, min, max) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
console.log(clamp(15, 0, 10)); // 10
console.log(clamp(-5, 0, 10)); // 0
console.log(clamp(7, 0, 10));  // 7

// ── Parameters vs Arguments ───────────────────────────────────────────────
// Parameters: the names listed in the function definition
// Arguments:  the actual values passed when calling the function

function describe(name, age) {  // name and age are parameters
  return `${name} is ${age} years old.`;
}
console.log(describe('Alice', 30)); // 'Alice' and 30 are arguments

// ── Default Parameters ────────────────────────────────────────────────────
// Used when an argument is not provided (or is undefined).

function welcome(name = 'Stranger') {
  return `Welcome, ${name}!`;
}
console.log(welcome());        // "Welcome, Stranger!"
console.log(welcome('Carol')); // "Welcome, Carol!"

// ── Rest Parameters ───────────────────────────────────────────────────────
// Collect any number of arguments into an array. Must be the last parameter.

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100

// ── Return Values ─────────────────────────────────────────────────────────
// A function without return (or with bare return) returns undefined.

function logMessage(msg) {
  console.log(msg); // side effect
  // no return statement → returns undefined
}

const result = logMessage('test'); // logs "test"
console.log(result);               // undefined

// ── Functions as Values ───────────────────────────────────────────────────
// Functions are first-class values in JavaScript — they can be passed around.

function applyTwice(fn, value) {
  return fn(fn(value));
}
console.log(applyTwice(double, 3)); // double(double(3)) → double(6) → 12

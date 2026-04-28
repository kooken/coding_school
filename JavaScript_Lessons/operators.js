// JavaScript Operators
// Operators perform operations on values (called operands).

// ── Arithmetic Operators ──────────────────────────────────────────────────

let a = 10;
let b = 3;

console.log(a + b);  // 13  — addition
console.log(a - b);  // 7   — subtraction
console.log(a * b);  // 30  — multiplication
console.log(a / b);  // 3.333... — division
console.log(a % b);  // 1   — modulus (remainder after division)
console.log(a ** b); // 1000 — exponentiation (a to the power of b)

// Increment and decrement
let count = 5;
count++; // same as count = count + 1
console.log(count); // 6

count--; // same as count = count - 1
console.log(count); // 5

// ── Assignment Operators ──────────────────────────────────────────────────
// Shorthand for combining an operation with assignment.

let x = 10;
x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x **= 2; // x = x ** 2 → 36
x %= 10; // x = x % 10 → 6
console.log(x); // 6

// ── Comparison Operators ──────────────────────────────────────────────────
// Always return true or false.

console.log(5 == '5');    // true  — loose equality: compares value only (type coercion)
console.log(5 === '5');   // false — strict equality: compares value AND type
console.log(5 !== '5');   // true  — strict inequality
console.log(5 != 6);      // true  — loose inequality
console.log(10 > 5);      // true
console.log(10 < 5);      // false
console.log(10 >= 10);    // true
console.log(10 <= 9);     // false

// Prefer === over == to avoid unexpected type coercion bugs.

// ── Logical Operators ─────────────────────────────────────────────────────

// AND (&&): true only if BOTH sides are true
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||): true if AT LEAST ONE side is true
console.log(false || true);  // true
console.log(false || false); // false

// NOT (!): flips the boolean
console.log(!true);  // false
console.log(!false); // true

// Combining logical operators
const age = 20;
const hasTicket = true;
console.log(age >= 18 && hasTicket); // true — both conditions met

// ── String Operators ──────────────────────────────────────────────────────

const firstName = 'John';
const lastName = 'Doe';

// + concatenates strings
console.log(firstName + ' ' + lastName); // "John Doe"

// Template literals are cleaner for string building
console.log(`Hello, ${firstName} ${lastName}!`); // "Hello, John Doe!"

// += also works with strings
let message = 'Hello';
message += ', World!';
console.log(message); // "Hello, World!"

// ── Ternary Operator ──────────────────────────────────────────────────────
// Short form of if/else: condition ? valueIfTrue : valueIfFalse

const userAge = 20;
const status = userAge >= 18 ? 'adult' : 'minor';
console.log(status); // "adult"

// ── typeof and instanceof ─────────────────────────────────────────────────

console.log(typeof 42);           // "number"
console.log(typeof 'hello');      // "string"
console.log([] instanceof Array); // true

// JavaScript Data Types
// Every value in JavaScript has a type.
// There are 7 primitive types and one complex type (Object).

// ── String ────────────────────────────────────────────────────────────────
// Text data. Wrap in single quotes, double quotes, or backticks.

const greeting = 'Hello, World!';
const language = "JavaScript";
const year = 1995;
const info = `${language} was created in ${year}.`; // template literal — embeds expressions

console.log(greeting); // Hello, World!
console.log(info);     // JavaScript was created in 1995.

// ── Number ────────────────────────────────────────────────────────────────
// Integers and decimals share the same type in JavaScript.

const age = 25;
const price = 9.99;
const negative = -10;
const result = 10 / 3; // 3.3333... (no integer-only division)

console.log(age, price, negative, result);
console.log(0.1 + 0.2); // 0.30000000000000004 — floating-point quirk

// Special numeric values:
console.log(Infinity);  // 1 / 0
console.log(-Infinity); // -1 / 0
console.log(NaN);       // "Not a Number" — result of invalid math, e.g. 'abc' * 2

// ── Boolean ───────────────────────────────────────────────────────────────
// Only two possible values: true or false.

const isLoggedIn = true;
const hasErrors = false;
console.log(isLoggedIn, hasErrors); // true false

// ── Null ──────────────────────────────────────────────────────────────────
// Intentional absence of a value — you set it explicitly.

let selectedUser = null;
console.log(selectedUser); // null

// ── Undefined ─────────────────────────────────────────────────────────────
// A variable that has been declared but not yet assigned a value.

let notYetSet;
console.log(notYetSet); // undefined

// ── BigInt ────────────────────────────────────────────────────────────────
// For integers larger than Number.MAX_SAFE_INTEGER (2^53 − 1).
// Append n to the literal.

const bigNumber = 9007199254740993n;
console.log(bigNumber); // 9007199254740993n

// ── Symbol ────────────────────────────────────────────────────────────────
// A unique, immutable identifier. Mostly used in advanced patterns.

const id = Symbol('id');
console.log(id);          // Symbol(id)
console.log(typeof id);   // "symbol"

// ── Object ────────────────────────────────────────────────────────────────
// A collection of key-value pairs. Values can be any type.

const person = {
  name: 'Alice',
  age: 30,
  isStudent: false,
};
console.log(person);       // { name: 'Alice', age: 30, isStudent: false }
console.log(person.name);  // Alice
console.log(person['age']); // 30

// ── Array ─────────────────────────────────────────────────────────────────
// An ordered list. Arrays are objects in JavaScript.

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);      // ['apple', 'banana', 'cherry']
console.log(fruits[0]);   // apple  (zero-indexed)
console.log(fruits.length); // 3

// ── typeof operator ───────────────────────────────────────────────────────
// Returns a string describing the type of a value.

console.log(typeof 'hello');      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" — historical bug in JavaScript, not a mistake here
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"  (arrays are objects)
console.log(typeof function(){}); // "function"

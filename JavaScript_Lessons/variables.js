// JavaScript Variables
// A variable is a named container that stores a value.
// JavaScript has three keywords for declaring variables: var, let, and const.

// ── var ───────────────────────────────────────────────────────────────────
// Oldest keyword. Function-scoped. Can be re-declared and reassigned.
// Avoid in modern JavaScript — use let or const instead.

var city = 'New York';
var year = 2024;
console.log(city, year); // New York 2024

var city = 'London'; // re-declaration allowed (can cause confusing bugs)
console.log(city);   // London

// ── let ───────────────────────────────────────────────────────────────────
// Block-scoped. Value CAN be reassigned. Use for values that change.

let score = 0;
console.log(score); // 0

score = 42; // reassignment is fine
console.log(score); // 42

// let score = 100; // SyntaxError: cannot re-declare in the same scope

// ── const ─────────────────────────────────────────────────────────────────
// Block-scoped. Value CANNOT be reassigned after declaration.
// Use for values that should not change. Prefer const by default.

const PI = 3.14159;
const APP_NAME = 'Coding School';
console.log(PI, APP_NAME); // 3.14159 Coding School

// PI = 3; // TypeError: Assignment to constant variable.

// Note: const with objects/arrays still allows mutating their contents:
const colors = ['red', 'green'];
colors.push('blue'); // allowed — we're mutating the array, not reassigning colors
console.log(colors); // ['red', 'green', 'blue']

// ── Naming rules ──────────────────────────────────────────────────────────
// - Must start with a letter, underscore _, or dollar sign $
// - Cannot start with a digit
// - Cannot be a reserved word (see variableNames.js)
// - Case-sensitive: score and Score are different variables

let _privateValue = 'hidden';
let $price = 9.99;
let camelCaseIsPreferred = true; // standard JavaScript style

// ── let vs const: which to use? ───────────────────────────────────────────
// Start with const. Switch to let only if you need to reassign.

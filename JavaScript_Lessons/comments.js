// JavaScript Comments
// Comments are ignored by the JavaScript engine — they exist only for humans.

// ── Single-line comments ──────────────────────────────────────────────────
// Use // to comment out one line, or add a note at the end of a line.

let speed = 60; // speed in km/h

// This entire line is a comment and will not run:
// console.log('This will not execute');

// ── Block (multi-line) comments ───────────────────────────────────────────
// Use /* ... */ to span multiple lines.

/*
  This is a block comment.
  It can span as many lines as needed.
  Useful for longer explanations or temporarily disabling a block of code.
*/

/*
  Author: Coding School
  Topic:  JavaScript Comments
  Use block comments to document sections of your code.
*/

// ── When to comment ───────────────────────────────────────────────────────
// Good: explain WHY something is done a non-obvious way
// Bad:  explain WHAT the code obviously does (well-named code speaks for itself)

// Good comment — explains a non-obvious constraint:
const MAX_RETRIES = 3; // API rate limit allows 3 attempts per second

// Unnecessary comment — the code already says this:
// let x = 5; // set x to 5

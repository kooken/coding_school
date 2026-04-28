// JavaScript Reserved Words
// These words are part of the language syntax and cannot be used as variable names.
// Trying to use one will throw a SyntaxError.

// Example of what NOT to do:
// let class = 'History';   // SyntaxError: 'class' is a reserved word
// let return = 42;          // SyntaxError

// ── Reserved words by first letter ───────────────────────────────────────

// A  abstract
// B  boolean, break, byte
// C  case, catch, char, class, const, continue
// D  debugger, default, delete, do, double
// E  else, enum, export, extends
// F  false, final, finally, float, for, function
// G  goto
// I  if, implements, import, in, instanceof, int, interface
// L  long
// N  native, new, null
// P  package, private, protected, public
// R  return
// S  short, static, super, switch, synchronized
// T  this, throw, throws, transient, true, try, typeof
// V  var, void, volatile
// W  while, with
// Y  yield

// ── Safe naming alternatives ──────────────────────────────────────────────
// If a reserved word describes your concept well, add a descriptive prefix/suffix:

let className = 'History';    // instead of: class
let returnValue = 42;          // instead of: return
let isNew = true;              // instead of: new
let itemCount = 10;            // instead of: in (and more descriptive)

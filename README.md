# Coding School

A self-contained beginner's guide to **HTML** and **JavaScript**, built with no frameworks or external dependencies. Each lesson is a standalone file you can open directly in a browser.

## Live Preview

Open `index.html` in any browser to browse all lessons from a single home page.

## Project Structure

```
coding_school/
├── index.html              # Course home page — links to all lessons
├── style.css               # Shared stylesheet
│
├── HTML_Lessons/
│   ├── intro.html          # Document structure, headings, paragraphs, lists, attributes
│   ├── lesson1.html        # Core tags: formatting, links, images, audio, video, tables
│   ├── lesson2.html        # Forms: inputs, select, textarea, built-in validation
│   └── lesson3.html        # Semantic HTML: header, nav, main, article, section, footer
│
└── JavaScript_Lessons/
    ├── program.html        # Hello World: console.log and document.write
    ├── program.js          # Script loaded by program.html
    ├── comments.js         # Single-line and block comments
    ├── variableNames.js    # Reserved words that cannot be used as variable names
    ├── variables.js        # var, let, const — scoping and naming rules
    ├── dataTypes.js        # All 7 primitive types + Object and Array
    ├── operators.js        # Arithmetic, assignment, comparison, logical, ternary
    └── functions.js        # Declaration, expression, arrow, parameters, rest, closures
```

## HTML Lessons

| Lesson | Topics |
|--------|--------|
| **Intro — Document Structure** | `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, headings, paragraphs, lists, attributes |
| **Lesson 1 — Core Tags** | Text formatting, `<div>`, `<span>`, links, images, audio, video, tables |
| **Lesson 2 — Forms** | `<form>`, `<input>` types, `<select>`, `<textarea>`, `<label>`, built-in validation |
| **Lesson 3 — Semantic HTML** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<time>` |

## JavaScript Lessons

| Lesson | Topics |
|--------|--------|
| **Intro — Hello World** | `console.log()`, `document.write()`, `<script>` tag |
| **Comments** | `//` single-line, `/* */` block comments, when to comment |
| **Reserved Words** | Keywords that cannot be used as variable names |
| **Variables** | `var`, `let`, `const`, block scope, naming conventions |
| **Data Types** | `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`, `object`, `array`, `typeof` |
| **Operators** | Arithmetic, assignment, comparison (`==` vs `===`), logical, string, ternary |
| **Functions** | Declaration vs expression, arrow functions, default parameters, rest parameters, first-class functions |

## How to Run

No build step required.

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Navigate to any lesson from the home page.

For JavaScript lessons (`.js` files), open the browser console (**F12** → Console tab) to see `console.log` output.

## Technologies

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)

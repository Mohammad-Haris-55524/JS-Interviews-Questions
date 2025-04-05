// -------------------------------------- How JavaScript Executes Code - Simple Explanation for Beginners ------------------------------------
// JavaScript code execution might seem magical, but it's actually a well-defined process. Let me break it down for you in simple terms:

// 1. The JavaScript Engine
// When you run JavaScript (in a browser or Node.js), a special program called the "JavaScript engine" reads and executes your code. Popular
// engines are:
// V8 (Chrome, Node.js)
// SpiderMonkey (Firefox)
// JavaScriptCore (Safari)

// 2. The Execution Process
// JavaScript executes code in two main phases:

// A. Creation Phase (Before Running)
// Creates the Global Execution Context - a "workspace" where your code runs
// Sets up memory space for variables and functions (called "hoisting")
// Variables: Gets memory with value undefined
// Functions: Stored in memory completely

// B. Execution Phase (Running Line by Line)
// Executes your code one line at a time
// When it encounters a function call:
// Pauses current execution
// Creates a new Execution Context for that function
// Runs the function's code
// After finishing, returns to where it left off

// 3. The Call Stack
// JavaScript uses a "call stack" to keep track of where it is:
// When a function is called, it's added (pushed) to the stack
// When a function finishes, it's removed (popped) from the stack
// The stack is "Last In, First Out" (like a stack of plates)

// 4. Simple Example
// var name = "Alice";

// function greet() {
//     console.log("Hello, " + name);
// }

// greet();

// How this executes:

// Creation phase:
// Stores name as undefined
// Stores entire greet function
// Execution phase:
// Line 1: Assigns "Alice" to name
// Line 5: Sees greet() call
// Creates new context for greet function
// Runs console.log() inside greet
// After greet finishes, pops it from stack

// 5. Key Points to Remember
// JavaScript is single-threaded - does one thing at a time
// It's synchronous by default (runs line by line)
// Uses hoisting - moves declarations to top (but not assignments)
// Has a call stack to manage function calls
// Each function call creates a new execution context



// -------------------------------------- Global Execution Context in JavaScript - Simple Explanation ----------------------------------------
// 1. When is the Global Execution Context Created?

// ✅ Answer: The Global Execution Context (GEC) is created as soon as the JavaScript engine starts executing your script, even before any 
// code runs.
// Before Execution: The JS engine first sets up the GEC (memory allocation phase).
// During Execution: The engine runs the code line by line inside this GEC.

// 🔹 Hint Answer:
// "The Global Execution Context is created before the JavaScript engine starts executing the actual code. It’s the first thing that happens
//  when a script loads."


// 2. What is the Global Execution Context (GEC)?

// It is the default environment where your JavaScript code runs.
// It represents the global scope (like the window object in browsers or global in Node.js).
// All top-level code (code not inside any function) runs here.
// It manages variables and functions declared globally.

// 🔹 Example:
var name = "Alice"; // Global variable (part of GEC)
function greet() {  // Global function (part of GEC)
    console.log("Hello, " + name);
}
greet(); // Function call (executed inside GEC)


// 3. Why Do We Need the Global Execution Context?

// The GEC is essential because:
// Memory Allocation (Hoisting)
// Before running code, JS scans it and allocates memory for:
// Variables (var declarations get undefined initially).
// Functions (stored entirely in memory).
console.log(name); // undefined (hoisted but not assigned yet)
var name = "Bob";  
greet(); // Works even if called before declaration (hoisting)
function greet() { console.log("Hi!"); }

// Execution Order Management
// JS is single-threaded, so the GEC helps track which code runs first.
// Handling Function Calls
// When a function is called, a new execution context is created and pushed onto the call stack.
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
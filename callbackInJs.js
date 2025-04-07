// ✅------------------------------------------------ What is a Callback in JavaScript? ------------------------------------------------------
// A callback is just a function that you pass as an argument to another function — and it gets called later.

// “Call me back when you’re done!”
// That’s exactly what a callback means! 🔁

// 🧠 Why Do We Need Callbacks?

// JavaScript runs asynchronously, which means it doesn't wait for things like:

// API responses
// File reading
// Timeouts
// That’s where callbacks help!

// ✔ Callbacks allow you to:

// Run code after something finishes (like a server response).
// Make your code non-blocking (don’t freeze the page).

// 🧾 Simple Example of a Callback
function greeting(name) {
    console.log("Hello, " + name);
}

function sayHello(callback) {
    const name = "Zara";
    callback(name); // Call the callback function
}

sayHello(greeting); // Output: Hello, Zara

// 💡 What’s Happening?
// greeting is a function.
// We pass it to sayHello as a callback.
// sayHello runs greeting(name) when it’s ready.


// ------------------------------------------- 🕒 Callback with setTimeout (Async Example) ----------------------------------------------------
function doSomethingLater(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");
        callback();
    }, 2000);
}

doSomethingLater(() => {
    console.log("Step 2 after delay");
});

// 💡 What’s Happening?
// Step 1 runs after 2 seconds.
// Then it calls the callback to do Step 2.


// ⚠️ Do We Still Use Callbacks in Modern JS?

// Yes, but not as much because:

// Promises and async/await are easier to use and more powerful.
// But callbacks are still important in some places like:
// Event listeners
// Array methods (forEach, map, filter, etc.)
// Some older APIs




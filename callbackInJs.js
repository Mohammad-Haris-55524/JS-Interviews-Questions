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



// 🧩--------------------------- Callback in Array Methods -----------------------------------
const numbers = [1, 2, 3];

// (Normal function)
numbers.forEach(function (num) {
    console.log(num * 2); // Callback called for each item
});
// Arrow function? (Same above thing, just shorter)
numbers.forEach((num) => {
    console.log(num * 2); // Still a callback function
});
// ✅ This arrow function is also a callback function, passed into .forEach().


// 🔁 What is forEach doing with it?
// .forEach() goes through each item in the numbers array one by one, and:
// calls your callback
// and passes each array element (num) into it
// So the flow is like:
// Behind the scenes (simplified)
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    callback(num); // <-- calling the callback
}


// ✅ Where is the callback function in above normal function (line 71) ?
// Question arises:- Iss above forEach waly code my callback functions kahaan hay ?
// Answer: 
function (num) {
    console.log(num * 2);
}

// This function is passed as an argument to .forEach() — and that’s what makes it a callback function. 💡








//-------------------------------------------------- 😩 Callback Hell (Why Promises Were Born) ----------------------------------------------

// If you nest too many callbacks, code becomes messy:
doStep1(function () {
    doStep2(function () {
        doStep3(function () {
            console.log("All steps done!");
        });
    });
});
// This is called Callback Hell 🔥, and this is why we prefer Promises and async/await now.

//____________________________________________ 💡 Real-World Example: Callback Hell with API Calls ___________________________________________
// Let’s say we want to:

// Log in the user
// Get the user's profile info
// Fetch their posts

// And let’s simulate it using setTimeout() (to mimic API delay):

function loginUser(username, callback) {
    setTimeout(() => {
        console.log("User logged in:", username);
        callback({ userId: 1 });
    }, 1000);
}

function getUserProfile(userId, callback) {
    setTimeout(() => {
        console.log("Fetched profile for userId:", userId);
        callback({ name: "Zara", age: 25 });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("Fetched posts for userId:", userId);
        callback(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
}

// 🔥 CALLBACK HELL:
loginUser("zara123", function (user) {
    getUserProfile(user.userId, function (profile) {
        console.log("Profile:", profile);
        getUserPosts(user.userId, function (posts) {
            console.log("Posts:", posts);
        });
    });
});

// 🧠 Let’s Understand the Flow:
// loginUser simulates an API call → when done, it calls the callback with a userId.
// Inside that callback, we call getUserProfile → another async task.
// Inside that, we call getUserPosts.

// Each one is nested inside the previous one, creating this deep pyramid shape:
// loginUser
//    ↳ getUserProfile
//        ↳ getUserPosts


//>>>>>>>>>>>>>>>>>>>>>> 🛠 How to Fix Callback Hell? (Sneak Peek) <<<<<<<<<<<<<<<<<<<<<<<
// You can flatten this using:
// ✅ Promises
// ✅ Async/Await (most modern approach)





// ✅ Summary:
// Feature	                Explanation
// Callback	                A function passed into another function to run later
// Why use?	                Handle async tasks (like API calls, timeouts)
// Do we still use it?	    Yes, but often replaced with Promises or async/await
// Problems?	            Can get messy if deeply nested (callback hell)




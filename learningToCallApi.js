// Handling API Calls Using fetch in JavaScript
// There are two common ways to handle errors when making API calls using fetch:

// 1️⃣ Using try...catch (async/await)
// 2️⃣ Using .then().catch() (Promise chaining)

// 1️⃣ Using try...catch with fetch
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!response.ok) {  
            throw new Error(`HTTP error! Status: ${response.status}`);  
        }

        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

fetchData();


// 2️⃣ Using .then().catch() with fetch
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            if (!response.ok) {  
                throw new Error(`HTTP error! Status: ${response.status}`);  
            }
            return response.json();
        })
        .then(data => console.log("Data received:", data))
        .catch(error => console.error("Error fetching data:", error.message));
}

fetchData();



// How It Works:
// ✅ Uses .then() to handle the API response.

// ✅ Uses .catch() to catch and handle errors.

// ✅ Throws an error manually if response.ok is false.

// Final Verdict:
// 🟢 Use try...catch with async/await for cleaner and more readable code! 🚀


// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------- Promise Chaining in JavaScript – Detailed Explanation with Examples 🚀 ----------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// What is Promise Chaining?
// Promise chaining is a technique where multiple asynchronous operations (promises) are executed one after another. Each .then() receives the 
// result of the previous promise and returns a new promise, allowing us to avoid callback hell.

// Basic Promise Chaining Example
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Step 1: Data fetched");
//         }, 1000);
//     });
// }

// fetchData()
//     .then(result => {
//         console.log(result);
//         return "Step 2: Process data"; // Returning value automatically wraps it in a resolved Promise
//     })
//     .then(result => {
//         console.log(result);
//         return "Step 3: Save data to DB";
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

// Explanation:
// fetchData() returns a Promise that resolves after 1 second.
// The first .then() logs "Step 1: Data fetched" and returns another string.
// The second .then() logs "Step 2: Process data" and returns another string.
// The third .then() logs "Step 3: Save data to DB".
// If any error occurs, the .catch() block handles it.
// 📌 Each .then() gets the resolved value of the previous .then() and returns a new value.




// --------------------------------------- Promise Chaining with setTimeout (Simulating Async Calls) ------------------------------------------
// function step1() {
//     return new Promise(resolve => setTimeout(() => resolve("Step 1 Complete"), 1000));
// }

// function step2() {
//     return new Promise(resolve => setTimeout(() => resolve("Step 2 Complete"), 2000));
// }

// function step3() {
//     return new Promise(resolve => setTimeout(() => resolve("Step 3 Complete"), 1500));
// }

// // Chain the steps
// step1()
//     .then(result => {
//         console.log(result);
//         return step2();
//     })
//     .then(result => {
//         console.log(result);
//         return step3();
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

// Key Takeaways from This Example:
// Each function returns a promise that resolves after a delay.
// The next .then() waits for the previous promise to resolve before executing.
// The order of execution is maintained without using nested callbacks.




//------------------------------------------------------- Handling Errors in Promise Chaining ------------------------------------------------
// If an error occurs at any step, .catch() will handle it.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Error fetching data!"), 1000);
    });
}

fetchData()
    .then(result => {
        console.log(result);
        return "Processing data";
    })
    .catch(error => {
        console.error("Caught Error:", error);
        return "Recovered from error"; // Continue the chain
    })
    .then(result => {
        console.log(result);
    });

// What Happens Here?
// fetchData() rejects the promise, triggering the .catch().
// .catch() handles the error and returns a recovery message.
// The next .then() continues execution normally.


// ------------------------------------------------ Promise Chaining (then and catch) vs (Async/Await) ---------------------------------------
// Using Promise Chaining
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log("To-Do:", data))
    .catch(error => console.error("Error:", error));

// Using Async/Await (More Readable)
async function getTodo() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log("To-Do:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
getTodo();
// 📌 async/await makes code more readable but works the same as promise chaining!

// Final Thoughts on Promise Chaining
// ✅ Helps execute multiple asynchronous tasks in sequence.
// ✅ Prevents callback hell by keeping the code flat & readable.
// ✅ .catch() handles errors for the entire chain.
// ✅ Returning a new promise in .then() allows further chaining.
// ✅ async/await is a cleaner alternative but internally uses promises.



// ✅ Realistic async/await Example

// ✅ Scenario: When One API Depends on Another
// Let’s say you:
// First log in a user
// Then fetch their profile info
// Then load their posts
// Each API call depends on the result of the previous one.



// Simulate API functions
function loginUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, username: "zara123" }), 1000);
    });
}

function getUserProfile(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: userId, name: "Zara", age: 25 }), 1000);
    });
}

function getUserPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
    });
}

// ✅ async/await version
async function fetchUserDataFlow() {
    try {
        const user = await loginUser(); // Step 1
        console.log("User Logged In:", user);

        const profile = await getUserProfile(user.id); // Step 2
        console.log("User Profile:", profile);

        const posts = await getUserPosts(user.id); // Step 3
        console.log("User Posts:", posts);
    } catch (error) {
        console.error("Something went wrong!", error);
    }
}

fetchUserDataFlow();

// 💡 Why is async/await better for this?

// Feature	Promises	Async/Await
// Readability	Can be messy if not chained cleanly	✅ Looks like simple top-down code
// Error handling	.catch() at the end	✅ try...catch like synchronous code
// Beginner-friendly	Medium	✅ Very easy to follow
// Nesting	Less, but still some if not handled well	✅ No nesting at all







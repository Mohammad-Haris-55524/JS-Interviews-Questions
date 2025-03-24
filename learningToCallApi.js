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

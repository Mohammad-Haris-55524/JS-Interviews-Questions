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


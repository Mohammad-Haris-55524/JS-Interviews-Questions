// Explain me the concept of debouncing and throttling in JS. I want to prepare myself for frontend interview so must cover each and everything 
// that can be asked related to this topic. Also cover follow up questions to in detail. Must give an example so that i could understant it 
// easily.
// Answer:
// Great! Let's dive deep into debouncing and throttling—two key performance optimization techniques in JavaScript, especially useful in 
// handling events like scroll, resize, keyup, etc. These topics are commonly asked in frontend interviews, so I’ll cover everything you
// need: core concept, use cases, differences, code examples, and possible follow-up questions.


// ✅ 1. What is Debouncing?
// 📘 Definition:
// Debouncing ensures that a function is called only after a certain period of time has passed since it was last invoked.
// It's like saying: "Wait for the user to stop typing for 300ms before triggering the API call."

// 📌 Use Case Examples:
// 1) Search bar input (trigger API after user stops typing)
// 2) Window resizing
// 3) Autocomplete suggestions
// 4) Saving form field autosave

// 🧠 How it works:
// Every time the event is triggered, a timer is reset.
// The actual function will run only after the user has stopped triggering the event for the given delay.

// ✅ Example: Debounce a search API
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  function searchQuery(value) {
    console.log("Searching for:", value);
  }
  
  const debouncedSearch = debounce(searchQuery, 300);
  
  // Simulate user typing
  document.getElementById("search").addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
  });


// This means searchQuery is called only when the user stops typing for 300ms.


// ✅ 2. What is Throttling?
// 📘 Definition:
// Throttling ensures a function is called at most once in a specific time interval, no matter how many times the event occurs.
// It’s like saying: "You can call this function every 1 second, but not more than that."

// 📌 Use Case Examples:
// 1) Scroll event (to track scroll position)
// 2) Button click prevention (rapid double click)
// 3) Resize window tracking
// 4) Rate-limited API calls

// 🧠 How it works:
// A flag is set when the function runs and only resets after the defined interval.
// While the flag is set, further calls are ignored.

// ✅ Example: Throttle scroll position
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  function logScroll() {
    console.log("Scroll position:", window.scrollY);
  }
  
  const throttledScroll = throttle(logScroll, 1000);
  
  window.addEventListener("scroll", throttledScroll);
  
  




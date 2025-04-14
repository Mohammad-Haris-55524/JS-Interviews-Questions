// 🔹 What is Currying?
// Currying is a technique in JavaScript (and other languages) where a function that takes multiple arguments is transformed into a series of
// functions that each take one argument at a time.

// 🔹 Simple Definition:
// Currying is breaking down a function that takes many arguments into multiple functions that each take one argument.

// 🔹 Normal Function vs Curried Function
// ✅ Normal Function:
function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 3)); // Output: 5

//   ✅ Curried Version:
function curriedAdd(a) {
    return function(b) {
      return a + b;
    }
  }
  
  console.log(curriedAdd(2)(3)); // Output: 5
// In the curried version, the function takes one argument a, and returns another function that takes the second argument b.  

// 🔹 Why is Currying Useful?
// ✅ Reusability – You can create reusable functions.
// ✅ Customization – Helps in creating more flexible and readable code.
// ✅ Functional Programming – It’s a common concept in FP-style code.
// ___________________________________________________________________________________________________________________________________________
// ------------------------------------------------ CHECK EXAMPLE OF CURRYING USFULLNESS BELOW -----------------------------------------------
// ___________________________________________________________________________________________________________________________________________

// 🔹 1. Reusability – You can create reusable functions
// ✅ Problem:
// Let’s say you want to apply a tax rate to multiple prices. Without currying, you repeat the tax rate every time:
function calculateTax(price, taxRate) {
    return price + (price * taxRate);
  }
  
  console.log(calculateTax(100, 0.1)); // 110
  console.log(calculateTax(200, 0.1)); // 220

// ✅ With Currying (Reusable):
function calculateTax(taxRate) {
    return function(price) {
      return price + (price * taxRate);
    }
  }
  
  const tenPercentTax = calculateTax(0.1);
  
  console.log(tenPercentTax(100)); // 110
  console.log(tenPercentTax(200)); // 220
//  ✅ Now you can reuse tenPercentTax wherever you want, without repeating the tax rate.


// 🔹 2. Customization – Helps in creating more flexible and readable code
// ✅ Problem:
// Imagine a greeting function:

function greet(greeting, name) {
    return `${greeting}, ${name}!`;
  }
console.log(greet("Hello", "Zaid"));

// ✅ With Currying (Customizable + Readable):
function greet(greeting) {
    return function(name) {
      return `${greeting}, ${name}!`;
    }
  }
  
  const sayHello = greet("Hello");
  const sayHi = greet("Hi");
  
  console.log(sayHello("Zaid"));  // Hello, Zaid!
  console.log(sayHi("Zara"));     // Hi, Zara!
// ✅ Now it’s cleaner and more readable. You’ve created customizable greeting functions!  
  







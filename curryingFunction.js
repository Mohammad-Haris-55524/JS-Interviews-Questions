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


// 🔹 3. Functional Programming – Common in FP-style code
// ✅ Example: Filtering data with currying
// Let’s say you want to filter a list of users by role:
  
const users = [
  { name: "Ali", role: "admin" },
  { name: "Sara", role: "user" },
  { name: "John", role: "admin" },
];

// ✅ Without currying:
function filterByRole(users, role) {
  return users.filter(user => user.role === role);
}

console.log(filterByRole(users, "admin"));

// ✅ With Currying (Functional Style):
const filterByRole = role => users => users.filter(user => user.role === role);

const getAdmins = filterByRole("admin");
const getUsers = filterByRole("user");

console.log(getAdmins(users)); // returns only admins
console.log(getUsers(users));  // returns only users
// ✅ This shows how currying fits well with functional programming — you build small, reusable functions that can be 
// composed together.

// 🔚 Final Interview Line (Summary):
// "Currying helps me break down functions into smaller, reusable pieces. It allows me to create custom and readable 
// logic, and it’s especially useful when writing functional-style code."




//------------------------------------------------- 🔹 Real-Life Style Example (interviewer-friendly) ----------------------------------------
// Imagine you're creating a discount system for a shop.

// ✅ Without Currying:
function applyDiscount(price, discount) {
  return price - (price * discount);
}

console.log(applyDiscount(100, 0.1)); // 90
console.log(applyDiscount(200, 0.1)); // 180

// ✅ With Currying:
function applyDiscount(discount) {
  return function(price) {
    return price - (price * discount);
  }
}

const tenPercentOff = applyDiscount(0.1); // discount is fixed
console.log(tenPercentOff(100)); // 90
console.log(tenPercentOff(200)); // 180
// ✅ This is clean, reusable, and flexible!

// 🔹 Using ES6 Arrow Functions (Short Syntax)
const curriedAdd = a => b => a + b;
console.log(curriedAdd(5)(10)); // 15


// 🔚 In Summary (good for interview ending)
// Currying means transforming a function so it can be called one argument at a time.
// It helps with code reusability, readability, and fits well with functional programming.
// You can implement it manually or with arrow functions.










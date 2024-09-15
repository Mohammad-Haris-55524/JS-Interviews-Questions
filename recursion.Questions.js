// Question # 01
// ---------------------------------------------- FIND FACTORIAL OF A NUMBER WITHOUT USING LOOP --------------------------------------------
// METHOD # 01 (USING LOOP WITHOUT RECURSION)
// const factorial = (num) => {
//   console.log(num)
// for(let i = num - 1; i >= 1; i--){
//   console.log({num},{i})
//   num = num * i //  5 * 4 = 20 , 20 * 3 = 60, 60 * 2 = 120, 120 * 1 = 120
// }
// return num
// }
// console.log("Factorial: ",factorial(5));

// METHOD # 02 (WITHOUT LOOP USING RECURSION)
const factorial = (num) => {
  console.log({ num });
  // BASE CASE:(Every recursion must have a base case to stop the recursion at certain point warna crash kar gy browser kiu ky yah bar bar
  // infinite time function chalta rahy ga)
  if (num === 1) {
    return 1;
  }
  // RECURSION CASE:
  else {
    // num = 5 * (factorial(5-1) * factorial(4-1) * factorial(3-1) * factorial(2-1)) ======> num = 5 * (4 * 3 * 2 * 1)
    // Jesy hi factorial(2-1) means factorial(1) hoga yah function factorial wala base case my chala gy ga  ====================>
    // num = 5 * (24) ===============> num = 120
    num = num * factorial(num - 1);
    console.log(num);
  }
  return num;
};
console.log("Factorial: ", factorial(5));

// Question # 02
// ------------------------------------------------- ADDTION OF ARRAY USING RECURSION ------------------------------------------------------
const sumOfArrayUsingRecursion = (arr) => {
  console.log(arr, arr.slice(0));
  if (arr.length === 0) {
    return 0;
  } else {
    console.log(sumOfArrayUsingRecursion(arr.slice(1)));
    // return arr[0] + sumOfArrayUsingRecursion(arr.slice(1));
  }
};
console.log("Addition: ", sumOfArrayUsingRecursion([1, 2, 3, 4, 5]));

// CODE EXECUTION:
// DRY RUN FOR ELSE CASE
//arr.slice(1) har iteration par 1st element ko skip kar raha hy or phr aik new array form kar raha hy jis ki wjah sy
// last wala array updated hojata hy new array sy check further code executions.
// EXECUTION # 01
// [1,2,3,4,5] line # 36
// arr[0] + sumOfArrayUsingRecursion(arr.slice(1));
// 1 + sumOfArrayUsingRecursion([2, 3, 4, 5])

// EXECUTION # 02
// [2,3,4,5] line # 36
// arr[0] + sumOfArrayUsingRecursion(arr.slice(1));
// 2 + sumOfArrayUsingRecursion([3, 4, 5])

// EXECUTION # 03
// [3,4,5] line # 36
// arr[0] + sumOfArrayUsingRecursion(arr.slice(1));
// 3 + sumOfArrayUsingRecursion([4, 5])

// EXECUTION # 04
// [4,5] line # 36
// arr[0] + sumOfArrayUsingRecursion(arr.slice(1));
// 4 + sumOfArrayUsingRecursion([5])

// EXECUTION # 05
// [5] line # 36
// arr[0] + sumOfArrayUsingRecursion(arr.slice(1));
// 5 + sumOfArrayUsingRecursion([])

// EXECUTION # 06:
// [] empty array line # 36
//  This time it will go to the base case because now it will go into the if block and stop code execution and
// return 0 and now this 0 zero will be added to .....

//  Returning from the fifth call:
// The fifth call had arr[0] = 5.
// It gets the result 0 from the base case and adds 5 + 0 = 5.
// The fifth call returns 5 to the fourth call.
// Returning from the fourth call:

// The fourth call had arr[0] = 4.
// It gets the result 5 from the fifth call and adds 4 + 5 = 9.
// The fourth call returns 9 to the third call.
// Returning from the third call:

// The third call had arr[0] = 3.
// It gets the result 9 from the fourth call and adds 3 + 9 = 12.
// The third call returns 12 to the second call.
// Returning from the second call:

// The second call had arr[0] = 2.
// It gets the result 12 from the third call and adds 2 + 12 = 14.
// The second call returns 14 to the first call.
// Returning from the first call:

// The first call had arr[0] = 1.
// It gets the result 14 from the second call and adds 1 + 14 = 15.
// The first call returns 15, which is the final result.

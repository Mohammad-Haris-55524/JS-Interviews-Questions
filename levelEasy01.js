// ---------------------------------------------------Calculate the total and find average---------------------------------------------------
// Question # 01:
const calculateAverage = (arr) => {
  const add = arr.reduce((prevVal, currVal) => {
    // For PART 1: (WHEN PASSING AN ARRAY)
    console.log(prevVal, currVal);
    prevVal = prevVal + currVal;
    // -----------------------------------------------------------------
    // For PART 2: WHEN PASSING AN ARRAY OF OBJECT)
    // Currentval my hamey object mily ga prev my index value mily gi  object ky index 0 ki key ko access karna hay to isi liye currVal.age use
    // kiya hy agar array ki key ko access karty to currVal[age] likty
    // console.log(prevVal,currVal.age)
    // prevVal = prevVal + currVal.age;
    // -------------------------------------------------------------------
    return prevVal;
  }, 0);
  console.log("Addition Result:", add);
  return add / arr.length;
};
// PART 1:
const result = calculateAverage([5, 10, 2, 8]);
// PART 2:
// const result = (calculateAverage([
//     {name: "Mohammad Haris", age: 26},
//     {name: "Zain Ahmed Khan", age: 30},
//     {name: "Aftab sherpao", age: 35}
// ]))
console.log("Average: ", result);
// -----------------------------------------------------------------------------------------------------------------------------------------
// How to access OBJECTS in OBJECT values by using . operator
// const obj = {
//    key01: {name: "Mohammad Haris", age: 26},
//    key02: {name: "Zain Ahmed Khan", age: 30},
//    key03: {name: "Aftab sherpao", age: 35}
// }
// console.log(obj)
// console.log(obj.key02)
// console.log(obj.key02.name)

// How to access OBJECTS in an ARRAY values by using obj.indexno[keyName]
// const obj = [
//      {name: "Mohammad Haris", age: 26},
//      {name: "Zain Ahmed Khan", age: 30},
//      {name: "Aftab sherpao", age: 35}
// ]
//  console.log(obj)
// console.log(obj[0])
//  console.log(obj[0].name)


// -------------------------------- WRITE A FUNCTION TO REVERSE A STRING WITHOUT USING IN BUILT METHOD -------------------------------------
// Question # 02:
// Method # 01 (WITHOUT using build in method)
const reverAString = (str) => {
  // Jab ham array pass kar rhay ho as an argument to phr empty array initialize karwao or phr har iteration par milnay wali value ko push karwaty
  // jao emptyArr my check TECHNIQUE 1 for array
  // Technique # 01
  // const arr = []

  // Technique # 02
  // (Best approach: Dekho bhai jab ap string pass kar rahy as an argument to empty string ko initialize kar ky uss ky andar values
  // ko save karwao jo har iteration par hamey mil rahe hay. Lekin jab ap array pass kar rhay ho as an argument to phr empty array initialize
  // karwao or phr har iteration par milnay wali value ko push karwaty jao emptyArr my check TECHNIQUE 1 for array
  let emptyStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // arr.push(str[i])
    emptyStr = emptyStr + str[i];
  }
  // return arr
  return emptyStr;
};
// console.log(reverAString("Haris").join(""))
// console.log(reverAString("Haris"))

// Method # 02 (By using build in method)
// const reverAString = (str) =>{
// return str.split("").reverse()
// }
// console.log(reverAString("Haris").join(""))

// --------------------------------------------------- FIND THE MIN AND MAX IN AN ARRAY -----------------------------------------------------
// Question # 03:
// Method # 01 (By using comparing method reduce)
// const findMin = (arr) =>{
// const result = arr.reduce((a,b)=>{
// console.log(a,b)
// return a < b ? a : b
// })
// return result
// }
// console.log(findMin([2,12,34,120,45,30,3]));

// Method # 02 (By using Math.min and Maths.max to find minimum and maximum value)
// Yaad rahy yah method array nahe ly skta iss ko array ly elements spread kara kar deny party han
// const findMin = (arr) =>{
// // Find Minimum value
// const result = Math.min(...arr)
// Find Minimum value
// const result = Math.max(...arr)
// return result
// }
// console.log(findMin([2,12,34,120,45,30,3]));

// Method # 03 (By using SORT method)
// const findMin = (arr) =>{
// const result = arr.sort((a,b)=>{
// console.log(a,b)
// // // Find minimum value
// // return a - b
// // Find maximum value
// return b - a
// })
// return result[0]
// }
// console.log("The minimum value is: ",findMin([2,12,34,120,45,30,3]));


//--------------------------------------------- CHECK A STRING or Number IS PALINDROM OR NOT -------------------------------------------------
// Question # 04:
// let userInput = prompt("Enter any string");
// function checkPalindrome(){
// let splitUserInput = (userInput.split(""));
// console.log(splitUserInput)
// let reverseUserInput = splitUserInput.reverse()
// console.log(reverseUserInput);
// let joinUserInput = reverseUserInput.join("");
// if(userInput === joinUserInput){
//     return ("It is a palindrome");
// }
// return ("It is not a palindrome")
// }
// console.log(checkPalindrome())


// ----------------------------------- WRITE A FUNCTION TO CONVERT STRING INTO CAMEL CASE OR SNAKE CASE -------------------------------------
// Question # 05:
const convertStrToCamelCase = (str) =>{
// Converting a string to a an array to use array methods
const strToArr = str.split(" ");
console.log(strToArr)
const result = strToArr.map((element)=>{
// // For camel case:
return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
// For snake case:
// return element.charAt(0).toLowerCase() + element.slice(1)
})
// Converting array of string to normal string again to acheive the desired result.
 // For camel case:
 return result.join(" ")
// For snake case:
// return result.join("_")
}
// console.log(convertStrToCamelCase("A quiCk brWwn fox jumPs ovEr the laZy dog"));
// ___________________________________________________________________________________________
// Remember the differnce between charAt() and charCodeAt()
// charAt(): Yah normal string ki values ka index.positon find karny ky liye use hota hay.
// let text = "HELLO WORLD";
// console.log(text.charAt(0));

// charCodeAt(): Yah strings ki ASCII code values find karny ky liye use hota hay
// let text = "HELLO WORLD";
// console.log(text.charCodeAt(0)); // ASCII CODE VALUE OF CAPITAL H IS 72 at index/position 0
// ___________________________________________________________________________________________
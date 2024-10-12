// -----------------------------------------------------Remove Duplicacy from an array----------------------------------------------------
// Question # 01
const removeDuplicates = (arr) =>{
    let emptyArray = [];
    // console.log(arr)
    for (let i=0; i < arr.length; i++){
      if(!emptyArray.includes(arr[i])){
        emptyArray.push(arr[i]);
      }
    }
    return emptyArray
    }
    console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 4, 1]))
    // console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b']))

// -----------------------------------------------------Remove Duplicacy from an String----------------------------------------------------
// Question # 02 
const removeDuplicatesFromStrings = (str) =>{
  let result = ''
  console.log(str)
  for (let i=0; i < str.length; i++){
    if(!result.includes(str[i])){
      result += str[i]
    }
  }
  return result;
}
// console.log(removeDuplicatesFromStrings("Mohammad Haris"));

// ****************************************Find the Longest string in a STRING **************************************************
// Question # 03
let str = 'My name is Mohammad Haris'
let strConvertedIntoArr = str.split(" ");
console.log(strConvertedIntoArr);
let comparisionLenght = 0;
let result;
for(let i=0; i < strConvertedIntoArr.length; i++){
  if(strConvertedIntoArr[i].length > comparisionLenght){ // is.length = 2 > 4 false mohammad.lenght = 8 > 4 true
    comparisionLenght = strConvertedIntoArr[i].length; //comparisionLenght = 8
    result = strConvertedIntoArr[i];
    console.log(result,comparisionLenght)
  }
}
// console.log("The greatest String is: ",result);


// ------------------------------------------------ Find the Longest string in an Array ----------------------------------------------------
// Question # 04
// var arr = [
//     'Web',
//     'Development',
//     'Tutorial'
//   ];
//   let lgth = 0;
//   let longest;

//   for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     if (arr[i].length > lgth) { //1) web.length = 3 > 0 = (true) go inside block (1-b) Development.length = 11 > 0 = (true) go inside block (1-c) Tutorial.length = 8 > 0 = (false) Will not go inside block hence Development is the greatest string in length
//       lgth = arr[i].length; //2)  lgth = 3 (web.length) (2-b) lgth = 11 (Development.length)
//       longest = arr[i]; // 3) longest = web  (3-c) longest = Development
//     }
//   }
//   console.log(longest);


// *******************************************Find the Shortest string in an ARRAY************************************************
// Question # 05
// const subjects = ["Biology", "English", "Physics", "Maths", "Chemistry"];
// // const str = "My name is mohammad haris";
// // const subjects = str.split(' ');
// // console.log(subjects)
// const reducedSubjects = subjects.reduce(function(a, b) {
//   return a.length > b.length ? a : b;
// });
// console.log(reducedSubjects);


// ---------------------------------------- CHECK IF A GIVEN STRING STARTS WITH A SPECIFIC SUBSTRING -----------------------------------------
// Question # 06
// METHOD # 01
// const checkGivenString = (str,subString) =>{
// console.log(str,subString);
// return str.toLowerCase().startsWith(subString.toLowerCase())
// }
// console.log(checkGivenString("Hello World", "hello"));

// REMEMBER:
// startsWith() is a String method and it is case sensetive. It takes 2 paramter 1 is string and another is substring that can be checked
// wether a substring is present in string or not.
// The startsWith() method returns true if a string starts with a specified string.
// Otherwise it returns false.
// string.startsWith(searchValue, start)
// let text = "Hello world, welcome to the universe.";
// console.log(text.startsWith("Hello", 0));
// console.log(text.startsWith("Hello", 1));
// console.log(text.startsWith("to", 21));

// METHOD # 02:
const checkGivenString = (str,subString) =>{
  console.log(str,subString);
  return str.toLowerCase().slice(0,subString.length) === subString.toLowerCase()
  //str.slice(0,subString.length) ===> subString.length = 5 ==> str.slice(0,5) Hello === hello (convert to lowercase)
}
// console.log(checkGivenString("Hello World", "hello"));


// --------------------------------------------- WRITE A FUNCTION TO FIND MEDIAN OF AN ARAAY --------------------------------------------------
// Question # 07
const findMedianInArray = (arr) =>{
  // STEP # 01 (CHECK IF ARRAY LENGTH = 0 THEN STOP CODE EXECUTION)
  if(arr.length === 0){
    return "No Array found !"
  }
  // STEP # 02 (SORT AN ARRAY IN ASCENDING ORDER TO FIND MEDIAN)
  const sortedArr = arr.sort((a,b)=>{
    return a - b
  })
  console.log(sortedArr)
  let midPoint = Math.round(sortedArr.length / 2) 
  console.log("Midpoint: ",midPoint)// Target the middle value of sorted arr and its value further be used to find median for ODD & EVEN array.
  
  // STEP # 02 (MEDIAN: FOR ODD ARRAY LENGTH)
  if(sortedArr.length % 2 === 1){
  console.log("ODD")
  return sortedArr[midPoint] - 1 //Yaad rahy sortedArr[midpoint] ky andar jab midpoint ki value pass karein gy to yah INDEX ky lihaaz sy value 
  // utha kar ly ga sortedArr my sy to woh value 1 agay ki hogi kiu ky ham ny midpoint my .length kar ky sortedArr ki value nikali the to isi 
  // liye ham -1 kar dein gy taky 1 step pechy ki value ly 
  }
  // (MEDIAN: FOR EVEN ARRAY LENGTH)
  else{
  console.log("EVEN")
  let mode = (sortedArr[midPoint] - 1) + ((sortedArr[midPoint] - 1) + 1) // -1 array ki length sy 1 value pechy ki value ko get karny ky liye use kiya hy 
  return (mode / 2)
  }
  }
  // console.log("Median: ",findMedianInArray([4, 2, 7, 5, 9, 8, 9, 42,9]));
  // console.log("Median: ",findMedianInArray([]));

  
// ------------------------------------------------------------- PASSWORD GENERATOR ---------------------------------------------------------
// Requirements !
// 1) Password should not start with a number
// 2) Minimum legnth of password should be 8.
// 3) Password must contain 1 Uppercase letter, 1 Lowercase letter and 1 Digit.
// 4) The function should return true if all the Requirements meets all the creiteria.

// Question # 08
// ------------------------------------------------- TECHNIQUE # 01 WITHOUT USING ASCII CODE -------------------------------------------------
//**************************** Method # 01 (Short Approach but doesn't fullfills specaial character validation ********************************
// function passwordGenerator(password){
// let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let lowerCase = "abcdefghijklmnopqrstuvwxyz"
// let number = "0123456789";
// let hasLowerCase = false;
// let hasUpperCase = false;
// let hasNumber = false;

// // Checking Length of password should not be less than 8
// if(password.length <= 8){
//   return "Password should not be less than 8 characters !"
// }

// // Check if the first character is a number
// if(number.includes(password.charAt(0))){
//   return "Password should not start from number !"
// }
// // Checking foe uppercase && lowercase && numbers if all conditions gets true the password validation will be sucessfull !
// for(let char of password){
// if (upperCase.includes(char)){
//   hasUpperCase = true 
// }
// else if(lowerCase.includes(char)){
//   hasLowerCase = true
// }
// else if(number.includes(char)){
//   hasNumber = true
//   // console.log({number},{char},{hasNumber})
// }
// }
// console.log({hasLowerCase},{hasUpperCase},{hasNumber})

// // _________________________________ Now from here onwards we are checking conditions for a invalid password ________________________________ 

// // Method # 01(Consise method to check if any one if the condtions matches the password should be invalid, But through this method we are unable 
// // to guide the user which mistake he is making while creating password  )
// // if(!hasLowerCase || !hasUpperCase || !hasNumber ){
// //   return "Enter a valid password !"
// // }
// //Method # 02 (Long but best method to check if any one if the condtions matches the password should be invalid, Because through this method
// // we are able to guide the USER which mistake he is making while creating password  )

// if(!hasLowerCase){ return "Password should contain at least 1 lowercase character !"}
// else if(!hasUpperCase){ return "Password should contain at least 1 uppercase character !"}
// else if(!hasNumber){ return "Password should contain at least 1 number !"}
// else{
//   console.log("Password Successfull ...")
//   return true
// }
// }
// console.log(passwordGenerator("Aries"))
// console.log(passwordGenerator("1AriesHaris"))
// console.log(passwordGenerator("AriesHaris1"))

// Question # 08(Part 02)
// --------------------------------------------------- TECHNIQUE # 02 (BY USING ASCII CODE) --------------------------------------------------

//***************************** Method # 02 (Best Approach BCZ it fullfills specaial character validation too) ********************************
// Requirements !
// 1) Password should not start with a number
// 2) Minimum length of password should be more than that 12 character .
// 3) Password must contain 1 Uppercase letter, 1 Lowercase letter and 1 Digit.
// 4) Password must also contain 1 special character also. 
// 5) The function should return true if all the Requirements meets all the creiteria.

const passwordGenerator = (password) =>{
  let containUppercase = false;
  let containLowercase = false;
  let containNumbers = false;
  let containSpecialCharacter = false;
  // __________________________________________________________________________________________________________________________________________
  // I have created these variables to avoid code repeatation while checking condition for password should not start from number OR special character.
  let numbersAsciiCode = password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57;
  let specialCharacterAsciiCodes = (password.charCodeAt(0) >= 21 && password.charCodeAt(0) <= 47) || 
  (password.charCodeAt(0) >= 58 && password.charCodeAt(0) <= 64) || 
  (password.charCodeAt(0) >= 91 && password.charCodeAt(0) <= 96)
  console.log({specialCharacterAsciiCodes}, {numbersAsciiCode})
  
  // Checking that Password length should be more than 12 characters. 
  if(password.length <= 12){
  return "Password should be more than 12 character !"
  }
  // Checking that Password should not start from Number or any Special Character. 
  if(numbersAsciiCode || specialCharacterAsciiCodes){
    // console.log(password.charCodeAt(0), password.charAt(0))
  return "Password Should not start from a number or a Special Character !"
  }
  // __________________________________________________________________________________________________________________________________________
  // Checking condition that password should atleast contain 1 Uppercase, 1 lowercase, 1 character, and 1 number.
  for(let char of password){
  // Checking for Uppercase
  if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
    // console.log({char})
    containUppercase = true
  }
  // Checking for Lowercase
  else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
    // console.log({char})
    containLowercase = true
  }
  // Checking for numbers
  else if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
    // console.log({char})
    containNumbers = true
  }
  // Checking for special Character
  else if((char.charCodeAt(0) >= 21 && char.charCodeAt(0) <= 47) || (char.charCodeAt(0) >= 58 && char.charCodeAt(0) <= 64) || 
  (char.charCodeAt(0) >= 91 && char.charCodeAt(0) <= 96)){
    // console.log({char})
    containSpecialCharacter = true
  }}
  console.log({containLowercase},{containUppercase},{containNumbers},{containSpecialCharacter})
  // __________________________________________________________________________________________________________________________________________
  // Checking if any of the above condition doesn't match we should show a meaningfull message to a user so that he could correct his mistake 
  // while creating password.
  if(!containLowercase) return "Password should contain at least 1 lowercase character !"
  else if(!containUppercase) return "Password should contain at least 1 uppercase character !"
  else if(!containNumbers) return "Password should contain at least 1 number !"
  else if(!containSpecialCharacter) return "Password should contain at least 1 character !"
  else{
    console.log("Password is VALID ......")
    return true
  }
  }
  // console.log(passwordGenerator('!AriesH@1ari0s'))
  // console.log(passwordGenerator('2AriesH@1ari0s'))
  // console.log(passwordGenerator('AriesH@ari12s'))


//------------------------------------- Write a Function to Calculate Numbers of days between 2 DATEs ----------------------------------------
// Question # 09
  function calculateDaysBetweenDates(date1, date2) {
    // Convert the input strings to Date objects
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    // Get the time difference in milliseconds
    const timeDifference = Math.abs(secondDate - firstDate);

    // Convert time difference from milliseconds to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

// Example usage:
const startDate = "2024-10-01";
const endDate = "2024-10-12";
console.log(calculateDaysBetweenDates(startDate, endDate)); // Output: 11

  

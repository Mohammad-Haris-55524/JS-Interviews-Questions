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



//--------------------------------------------- Find the Second Largest Number in an Array ---------------------------------------------------
function secondLargest(arr) {
  let uniqueArr = [...new Set(arr)]; // Remove duplicates
  uniqueArr.sort((a, b) => b - a); // Sort in descending order
  return uniqueArr[1] || null; // Return second largest or null if not found
}

console.log(secondLargest([10, 5, 20, 20, 8])); // 10

//--------------------------------------------------------- Check for Anagram ----------------------------------------------------------------
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false


//---------------------------------------------------- Find Missing Number in an Array ------------------------------------------------------
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let arrSum = arr.reduce((acc, num) => acc + num, 0);
  return sum - arrSum;
}

console.log("Output for missing numebr in an array: ",findMissingNumber([1, 2, 4, 5, 6])); // 3




//--------------------------------------------- Convert a Number to Roman Numerals -------------------------------------------------
function toRoman(num) {
  let map = {1000:"M", 900:"CM", 500:"D", 400:"CD", 100:"C", 90:"XC", 50:"L", 40:"XL", 10:"X", 9:"IX", 5:"V", 4:"IV", 1:"I"};
  return Object.keys(map).reverse().reduce((acc, key) => {
      while (num >= key) { acc += map[key]; num -= key; }
      return acc;
  }, "");
}

console.log(toRoman(58)); // "LVIII"




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


// ---------------------------------------- CHECK WETHER A CHARACTER IS in UPPER CASE OR LOWER CASE -------------------------------------------
// Question # 06:
// METOD # 01 (NORMAL TECHNIQUE BUT THIS NOT WORKS GOOD ON SINGLE DIGIT NUMBER AND SPECIAL CHARATERS )
// const checkUppercaseOrLowerCase = (char) =>{
// console.log(char);
// if(char.length > 1 || typeof char !== "string") {
//     return false
// }
// console.log(typeof char)
// if(char === char.toUpperCase()){
//     return "Character is in UPPER CASE"
// }
// else{
//      return "Character is in LOWER CASE"
// }
// }
// console.log(checkUppercaseOrLowerCase("a"))

// METOD # 02 (NORMAL TECHNIQUE BUT THIS NOT WORKS GOOD ON SINGLE DIGIT NUMBER AND SPECIAL CHARATERS )
const checkUppercaseOrLowerCase = (char) =>{
  console.log(char);
  if(char.length > 1) {
      return false
  }
  console.log(char.charCodeAt())
//___________________________________________________________________________________________________________________________________________
// Remember
// && operator ka use isi liye karen gy taky dono conditions true hongi to hi sahe sy condition works kary gi. For exampple 1 pass kar diya
// to 1 ka ASCII code 47 hota hy to agar && operator laga hoga to woh check kary ga ky 47 lie karta hay 65 sy 90 ky darmain yah nahe. Kiu ky
// agar || laga di to 47 is less than <= 90 to yah chal gy gi or hamari condition fail hogy gi
//___________________________________________________________________________________________________________________________________________

  if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
      return "Character is in UPPER CASE"
  }
  else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
       return "Character is in LOWER CASE"
  }
  else{
      return "Neither a Character and nor an UPPER or LOWER case"
  }
  }
  // console.log(checkUppercaseOrLowerCase("A"))
  // console.log(checkUppercaseOrLowerCase("g"))
  // console.log(checkUppercaseOrLowerCase("1"))
  // console.log(checkUppercaseOrLowerCase("%"))


// ------------------------------------------- REPEAT A STRING AS MANY TIMES OF PARAMETER VALUE -------------------------------------------
// Question # 07:
const repeatStr = (str, times) =>{
  // Method # 01 (By using Built in Method =======> repeat())
  // return times > 0 ? str.repeat(times) : str;
  
  // Method # 02 (Without using in Build method)
  let emptyStr = ""
  if(times > 0){
  for(let i = times; i > 0; i --){
    emptyStr = str + emptyStr
    // console.log(emptyStr)
  }}
  else{
    return str
  }
  return emptyStr
  }
  // console.log("Result of Repeated String: ", repeatStr("haris", 4))


// ------------------------------------------------ WRITE A FUNCTION TO TURNCATE A STRING ---------------------------------------------------
// Question # 08:    
const truncateAStr = (str, times) =>{
  // Method # 01 (BY USING (SPLIT) AND SPLICE, BECAUSE SPLICE IS AN ARRAY METHOD THAT WHY WE CONVERTED A STRING TO AN ARRAY BY USING SPLIT)
      // const strToArr = str.split(" ")
      // const trimmedStr = strToArr.splice(0,times).join(" ")
      // return trimmedStr + "............."
      
  // Method # 02 (BY USING SLICE METHOD CAN BE USED ON ARRAY AS WELL ON STRING ALSO
      const trimmedStr = str.slice(0, times)
      return trimmedStr + "............."
      }
      console.log(truncateAStr("A quick brown fox jumps over the lazy dog", 7))
      
  // ************************************* TRUNCATE A STRING USING DOM (METHOD # 01 BY USING FUNCTION) ****************************************
      // let toggle = true
      // function btn(thisValue){
      // let strElement = document.getElementById('truncateString');
      // let str = strElement.innerHTML;
      // let trimmedStr = str.slice(0,14) + ".........."
      // if(toggle){
      // strElement.innerHTML = trimmedStr
      // console.log(strElement, str, trimmedStr)
      // thisValue.innerHTML = "Toggle On"
      // toggle = false
      // }
      // else{
      // strElement.innerHTML = "A quick brown fox jumps over the lazy dog"
      // thisValue.innerHTML = "Toggle Off"
      // console.log(str,trimmedStr)
      // toggle = true
      // }
      // }
      
// ******************************* TRUNCATE A STRING USING DOM (METHOD # 01 BY USING ADD EVENT LISTNER) **************************************
      let toggle = true
      let btnText = document.getElementById("toggleBtn")
      btnText.addEventListener("click", ()=>{
      let strElement = document.getElementById('truncateString');
      let str = strElement.innerHTML;
      let trimmedStr = str.slice(0,14) + ".........."
      if(toggle){
      strElement.innerHTML = trimmedStr
      btnText.innerHTML = "Toggle On"
      toggle = false
      }
      else{
      strElement.innerHTML = "A quick brown fox jumps over the lazy dog"
      btnText.innerHTML = "Toggle Off"
      toggle = true
      }
      })

// ------------------------------------------ Write a function to delete all vowels from a sentence -----------------------------------------
// Question # 09: 
const deleteAllVowels = (str) =>{
  let newStr = str.toLowerCase().split("")
  console.log(newStr)
  let vowels = "aeiouAEIOU";
  let result = newStr.filter((alphabet,index)=>{
    // Method # 01 (Short hand technique) (BEST APPROACH)
    if(!vowels.includes(alphabet)){
      // console.log(alphabet)
      return alphabet
    }
    // Method # 02 (Long technique)
    // if(!alphabet.includes('a') && !alphabet.includes('e') && !alphabet.includes('i') && !alphabet.includes('o') && !alphabet.includes('u'))  {
    // if(!alphabet.includes(vowels[index])){
    //   return alphabet
    // }
  })
  return result.join("")
}
console.log(deleteAllVowels('A quick brown fox jumps over the lazy dog'));


// --------------------------------------------- WRITE A FUNCTION TO FIND MEAN OF AN ARAAY --------------------------------------------------
// Question # 10:
const calculateMean = (arr) => {
  // Method # 01:-
  if(arr.length === 0){
    return 0
  }
  let add = 0;
  for(let i=0; i <arr.length; i++){
   add = add + arr[i]
  }
  return add/arr.length;

  // Method # 02:-
  // const result = arr.reduce((currVal,prevVal)=>{
  //     return currVal = currVal + prevVal
  // },0)
  // return  result/arr.length

  // // Method # 03:-
  // let add=0
  // arr.map((num)=>{
  // add = add + num
  // })
  // return add/arr.length;

  // Method # 04:-
//   let add = 0;
//   arr.forEach((num) => {
//     add = add + num;
//   });
//   return add / arr.length;
};
// console.log("Mean: ", calculateMean([-2, -4, -5, 7, 8, 9, 32]));
// console.log("Mean: ", calculateMean([2, 4, 5, 7, 8, 9, 32]));
// console.log("Mean: ", calculateMean([]));
      


// ---------------------------------- Write a function to find the occurences or Count of vowels from a sentence ------------------------------
// Question # 11
// _____________________________________________ Remember: USE METHOD 02 & 03 & 04 ARE BEST APPROACH _________________________________________
const occurencesOfVowelsInSentences = (str) =>{
  let newStr = str.split('')
  console.log(newStr)
  console.log(str.length)
  let vowels = "aeiouAEIOU";
  let obj = {};
  
  // // Method # 01 (Long Approach)
  let result = newStr.filter((character)=>{
    if(!vowels.includes(character)){
      // console.log(vowels)
      // console.log(character)
      return character
    }
    else{
      // console.log({vowels},{character})
      obj[character] = (obj[character] || 0) + 1
    }})
  return obj
  }
  // console.log(occurencesOfVowelsInSentences('A quick brown fOx jumps over the lazy dog'))
  
  
  // ___________________________________________________________________________________________________________________________________________
  // Method # 02 (Short Approach using inbuilt methods like filter and split)
  // let result = newStr.filter((alphabet)=>{
  // if(vowels.includes(alphabet)){
  //   console.log(alphabet,vowels)
  //   obj[alphabet] = (obj[alphabet] || 0) + 1
  // }})
  // let values= Object.entries(obj);
  // for(let value of values){
  //   console.log("Occurence of ",value[0] , " : " ,value[1])
  // }
  // return obj
  // }
  // console.log(occurencesOfVowelsInSentences('A quick brown fOx jumps over the lazy dog'))
  
  
  // ___________________________________________________________________________________________________________________________________________
  // Method # 03 (Best approach without using any built in Method like filter and split inspite of filter i will use for loop for iteration )
  // for(let alphabet of str){
  // // let result = newStr.filter((alphabet)=>{
  //   if(vowels.includes(alphabet)){
  //     // console.log(alphabet,vowels)
  //     obj[alphabet] = (obj[alphabet] || 0) + 1
  //   }}
  //   let values= Object.entries(obj);
  //   for(let value of values){
  //     console.log("Occurence of ",value[0] , " : " ,value[1])
  //   }
  //   return obj
  // }
  // console.log(occurencesOfVowelsInSentences('A quick brown fOx jumps over the lazy dog'))
  
  // ___________________________________________________________________________________________________________________________________________
  // Method # 04 (Best apprach without using any built in Method)
  // function countVowels(sentence) {
  //   // Define vowels
  //   const vowels = "aeiouAEIOU";
  //   // Initialize an object to store vowel occurrences
  //   const objForVowelCount = {};
  //   // Loop through each character in the sentence
  //   for (let alphabet of sentence) {
  //       if (vowels.includes(alphabet)) {
  // // 1st time else case par gy ga kiu ky object(objForVowelCount) my isy kuch nahe mily ga yani undefined mily ga kiu ky 1st time object empty hoga
  // // to else case my gy ga or jo vowel isy mila hoga includes waly method ky andar uss ki key bana kar uss my 1 rakhwa dy ga phr jab next alphabet 
  // // ko check kary ga uss time agar key mojood hogi to undefined ki jagah true mil gy ga or usi key ki last existing value my 1 plus kar dy ga
  // // or agar key dobara sy nahe milti object my to dobara sy else case my jaa kar uss vowel ky name ki key bana dy ga or 1 value set kara dy ga
  //         // console.log(objForVowelCount[alphabet])
  //         if(objForVowelCount[alphabet]){
  //           console.log("IF")
  //           objForVowelCount[alphabet] += 1
  //         }
  //         else{
  //           console.log("ELSE")
  //           objForVowelCount[alphabet] = 1
  //         }}}
  //   return objForVowelCount;
  // }
  // // const sentence = "This is an example sentence.";
  // // console.log(countVowels(sentence));
  // ___________________________________________________________________________________________________________________________________________

// ---------------------------- Write a function to generate an Array of numbers (Number can be postitve and nagetive)--------------------------
// Question # 12
const generateNumberArray = (start, range) =>{
  let arr = [];
  for(let i = start; i <= range; i++){
    arr.push(i)
  }
  console.log(arr)
  }
  console.log(generateNumberArray(0, 0))
  // console.log(generateNumberArray(1, 6))
  // console.log(generateNumberArray(-6, 6))

// --------------------- Write a function for grouping an object by a specific property (E.g: group by role, gender etc) ----------------------
// Question # 13
function groupObjectByRole(users) {
  let newObj = {}
  for(let item of users){
  if(newObj[item.role]){
    newObj[item.role].push(item)
  }
  else{
    newObj[item.role] = []
    newObj[item.role].push(item)
  }
  }
  // console.log(newObj)
  return newObj
  }
  console.log(groupObjectByRole([
    {name: "Mohammad Haris", id: 55524, role: "Frontend developer"},
    {name: "Ali haider", id: 21234, role: "Software developer"},
    {name: "Mohammad Awais", id: 12344, role: "Frontend developer"},
    {name: "Mohammad shoaib", id: 454234, role: "Software developer"},
    {name: "Zain ahmed khan", id: 55525, role: "Backend developer"}
   ]))


// -------------------------------------------- Write a function to generate Random HEX color ------------------------------------------------
// Question # 14
// Method # 01 (By using Function technique)
const generateRandomHexColorAndChangeBgColor = () =>{
  console.log("Clicled !")
// ___________________________________________________________________________________________________________________________________________
// toString(16): Iss method ky andar 16 pass karny sy yah hoga yah jo random number hoga 1 to woh string my change hogy ga sath my hexaDecimal
// value bhe convert kar dy Mathd.random() ky numbers ko.
// padEnd(6,0) Iss ky andar (6,0) isi liye pass kiya hy ky agar kabhe random number ki length 4-5 genrate hogy to yah uss ki length ko 6 number 
// tak zabardsti poucha dy uss ky agay utnay 0 laga kar jab tak randomHexCode ki length 6 nahe hojati utny 0 laga do kiu ky hex color my 6 num hoty han 
// ___________________________________________________________________________________________________________________________________________
  const randomHexCode = `#${(Math.random().toString(16).slice(2,8).padEnd(6,0))}`
  let bodyElement = document.getElementsByTagName('body')
  bodyElement[0].style.backgroundColor = randomHexCode
  // console.log(bodyElement)
}

// // Method # 02 (By using AddEventListner)
// document.getElementById('changeBgColor').addEventListener('click', ()=>{
// console.log("Clicled !")
// const randomHexCode = `#${(Math.random().toString(16).slice(2,8).padEnd(6,0))}`
// console.log(randomHexCode)
// let bodyElement = document.getElementsByTagName('body')
// bodyElement[0].style.backgroundColor = randomHexCode
// console.log(bodyElement)
// })
  

// -------------------------------------------- Write a function to CHECK the OBJECT EMPTINESS ------------------------------------------------
// Question # 15
const checkObjectEmptiness = (obj) =>{
  // --------------------------------------- Method # 01 : (By using hasOwnProperty (Object method)) -------------------------------------------
  // Remember: For object itertion we always use FOR IN LOOP. This loop provides us the keys present in an object. 
  // for(let key in obj){
  // console.log(key)
// The hasOwnProperty() method returns TRUE if the specified property is a direct property of the object — even if the value is null or undefined
// (Has own property): Will check that the object does have the key inside it or not. If provided key exists it will return TRUE else FALSE 
// // console.log(obj.hasOwnProperty(key))
  // if(obj.hasOwnProperty(key)){
  //   return 'Object has key and value'
  // }
  // }
  // return 'Object is empty !'
  
  
  // --------------------------------- Method # 02 : (Using Object.keys method while checking the length of keys) -------------------------------
  console.log(Object.keys(obj).length);
  if(Object.keys(obj).length > 0){
     return 'Object has key and value'
  }
  return 'Object is empty !'
  }
  console.log(checkObjectEmptiness({})) //'Object is empty!'
  console.log(checkObjectEmptiness({'': 123})) //'Object is empty!'
  console.log(checkObjectEmptiness({id: 55524})) //'Object has key and value '
  console.log(checkObjectEmptiness({id: null})) //'Object has key and value '
  console.log(checkObjectEmptiness({id: undefined})) //'Object has key and value '
  console.log(checkObjectEmptiness({id: ''})) //'Object has key and value '



// ----------------------------------------------Write a Function to convert an OBJECT into and Array -----------------------------------------
// Question # 16
const convertObjectToArray = (obj) =>{

//(1) Converting an Object into an Array (Object.entries())
  // Object.enteries: Yah method Object ko Array my convert kar dy ga kuch iss trha ky object ki keys ko array ki keys sy replace kar dy ga. Ap ko 
  // yad hoga array my indexs hoty thy 0, 1 etc lekin yah method object ki keys ko array ki keys bana dy ga or sath my Properties ko index ki values
  // ky tor par set karwa dy ga. Iss method sy milna wala Array hamesha multidimensional array hoga or ham multidimensional array ko 1D Array my
  // convert kar lein gy just by using Flat method (Yaad rahy flat method array ka method hay)
  const objToArray = Object.entries(obj)
  console.log(objToArray)
  // Convert Multidimensional Array into 1D Array: (Flat method)
  const singleDimensionalArrOrFlatenningAnArray = objToArray.flat()
  console.log(singleDimensionalArrOrFlatenningAnArray)
  
  //(2) Converting an Array into an Object Object.fromEntries()
  // fromEntries: Yah Object ka method Array ko convert kar dy ga aik Object ky andar
  const arrayToObject = Object.fromEntries(objToArray)
  console.log(arrayToObject)
  }
// convertObjectToArray(
//     {"First Name" : "Mohammad Haris",
//       id: 55524,
//       gender: "Male"}
//     )

// -------------------------------------------------- Write a Function to Calculate Intrest --------------------------------------------------
// Question # 17
const calculateSimpleIntrest = (principleAmount,rateOfIntrestPerAnum,timeInYear) =>{
  const simpleIntrest = (principleAmount * rateOfIntrestPerAnum * timeInYear) / 100
  return simpleIntrest
  }
  // console.log("Simple Intrest: ",calculateSimpleIntrest(1000,5,3))


// ----------------- Write a Function to Calculate SQUARE of all given numbers in an array and then calculate the sum of Array ----------------
const calculateSquareOfArray = (arr) =>{
  console.log(arr)
  // Method # 01 (Phely map laga kar Array ka square nikala hy uss ky baad reduce method sy add karwaya hy) (LONG METHOD)
  const squareOfArr = arr.map((val)=> val * val)
  return sumOfSquareArr = squareOfArr.reduce((prevVal,currentVal)=>prevVal + currentVal)
  
  // Method # 02 (Direct map laga kar reduce method laga raha hon 1 liner (2 higher order methods ko aik sath use karny ko METHOD CHAINING bolty han)
  // const squareAndSumOfArr = arr.map((value)=> value * value).reduce((prevVal,currVal) => prevVal + currVal)
  // return squareAndSumOfArr;
  
  // Method # 03 (Sirf reduce sy dono operation kar ky dekhao add or sum 1 hi time par)
  // const squareAndSumOfArr = arr.reduce((prevVal,currVal) => {
  //   return prevVal = prevVal + (currVal * currVal)
  // })
  // return squareAndSumOfArr;
  
  // // Method # 04 (Avoid using any build in methods)
  // let sumOfArr = 0
  // for(let  i = 0; i < arr.length; i++){
  // sumOfArr = sumOfArr + (arr[i] * arr[i])
  // }
  // return sumOfArr
  }
  
  console.log("Sum of array after sqauring the array numbers: ", calculateSquareOfArray([1,2,3])) 


// -------------------------------------------------------- OTP Generation and Validation ----------------------------------------------------
// Function to generate a 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to validate OTP
function validateOTP(userInput, generatedOTP) {
  return userInput === generatedOTP;
}

// Example Usage
const otp = generateOTP();  // Generates a random OTP
console.log("Generated OTP:", otp);

const userEnteredOTP = "123456";  // Simulating user input
console.log("Is OTP valid?", validateOTP(userEnteredOTP, otp)); 


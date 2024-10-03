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
      


// ------------------------------------- Write a function to find the occurences of vowels from a sentence -----------------------------------
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
const generateRandomHexColor = () =>{
const randomHexCode = `#${(Math.random().toFixed(6).toString())}`
// console.log(randomHexColor.slice(3))
const convertRandomHexCodeIntoColor = randomHexCode.slice(3)
console.log(convertRandomHexCodeIntoColor)
let bodyElement = document.getElementsByTagName('body')
bodyElement.style.backgroundColor = convertRandomHexCodeIntoColor
console.log(bodyElement)
}
console.log(generateRandomHexColor())
  
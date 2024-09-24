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

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
// --------------------------------------------------- Check wether the 2 arrays are equal or not--------------------------------------------
// Question # 01
// The every() method returns true if every element in an array pass a function test
const comparingTwoArrays = (arr1,arr2) =>{
    console.log(arr1,arr2)
    const result = arr1.every((currentVal,index) => {
        if(arr1.length !== arr2.length){
            return false
        }
        if(currentVal === arr2[index]){
        // console.log({currentVal},{arr2},index)
        return true;
    }
    return false;
    })
    return result;
    }
    // console.log(comparingTwoArrays([1,2,3],[1,2,3,4]))
    // console.log(comparingTwoArrays([],[]))
    // console.log(comparingTwoArrays([1,3],[1,2,3]))
    // console.log(comparingTwoArrays([1,2,3],[1,2,4]))


// --------------------------------------------- WRITE A FUNCTION TO FIND MODE OF AN ARAAY --------------------------------------------------
// Question # 02
// const findMode = (arr) =>{
// let count = {}
// let maxNumber = 0
// let mode = [];
// console.log(arr)
// for(let key of arr){
//   count[key] = (count[key] || 0) + 1
//   console.log(key,count)
// // {1: 3, 2: 3, 3: 1, 4: 1} // Now count will check this object according to count[keys]
// if(count[key] > maxNumber){
//   maxNumber = count[key];
//   mode.push(maxNumber);
//   // mode = maxNumber // Yah karny sy mujhy count ki most occurence ki value mily gi lekin mujhy woh key(element) chaihyee jo sab sy ziada bar
//   // repeat howa hy array ky andar, to isi liye ham key ki value extract kar ky MODE my save karein gy
//   // mode = key
// }}
// console.log(mode)
// // return mode
// }
// console.log(findMode([1, 2, 2, 3, 4, 2,1 ,1]))
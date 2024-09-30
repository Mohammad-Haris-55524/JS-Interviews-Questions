// --------------------------------------------------- Check wether the 2 arrays are equal or not--------------------------------------------
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
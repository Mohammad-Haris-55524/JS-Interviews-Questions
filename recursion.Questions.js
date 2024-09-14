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
    console.log({num})
    // BASE CASE:(Every recursion must have a base case to stop the recursion at certain point warna crash kar gy browser kiu ky yah bar bar 
    // infinite time function chalta rahy ga)
    if(num === 1){
    return 1
    }
    // RECURSION CASE:
    else{
    // num = 5 * (factorial(5-1) * factorial(4-1) * factorial(3-1) * factorial(2-1)) ======> num = 5 * (4 * 3 * 2 * 1) 
    // Jesy hi factorial(2-1) means factorial(1) hoga yah function factorial wala base case my chala gy ga  ====================> 
    // num = 5 * (24) ===============> num = 120 
    num  = num * factorial(num - 1);
    console.log(num)
    }
    return num;
    }
    console.log("Factorial: ",factorial(5));
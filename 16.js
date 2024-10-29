// some method in js
// some method return true/false 
// some method check on every value ..
// if any value is true then it return true else false;


let arr=[2,4,6,8,10,13,14,20];


let b = arr.some((value)=>value % 2 != 0);

console.log(b);
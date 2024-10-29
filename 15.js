// every method in js
// always return true/false 
// if every value return true then only the every method return true else false;

let arr=[2,4,6,8,10,12,41];


// function check(value){
//     return value%2==0;
// }
// let b=arr.every((check));
// console.log(b);


let b=arr.every((value)=>value%2==0);
console.log(b);
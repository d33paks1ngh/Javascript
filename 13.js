// sort
// sort function modifies the original array;

let arr = [1, 22, 13, 4, 45, 61, 7, 8, 9, 10, 11, 12, 14];
 
console.log(arr);

//1
// arr.sort((a,b)=>a-b) // arrow function

//2
arr.sort((a,b)=>{
    return a-b;
})

//3

function check(a,b){
    return a-b;
}
arr.sort(check);

//4
arr.sort((a,b)=>a-b);

console.log(arr);
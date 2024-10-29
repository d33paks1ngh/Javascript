// clone a array

let arr=[2,4,6,8,10,12,14,16,18];
let b=arr;
console.log(b===arr);
// both indicates the same memory location 

// methods to create a new array with new memory location

// slice
let c=arr.slice(0);
console.log(c===arr); // false bcz both indicates the diff memory location
 
// spread operator
let d=[...arr];
console.log(d===arr); // false;

// for(let i=0;i<d.length;i++){
//     console.log(d[i]);
// }

// concate...

let e=[].concat(arr);
console.log(e===arr);
 
// for(let i=0;i<e.length;i++){
//     console.log(e[i]);
// }



// intro to array

let arr=[2,4,3,6,5,8,9,4,3];

// size of array;
let b=arr.length;
console.log(b); // 9

// type of array

console.log(typeof(arr)); // object;

// check for array
let c=Array.isArray(arr);
console.log(c); // true;

//add element in back;
arr.push(15);
b=arr.length;
console.log(b);
console.log(arr[b-1]);

// add element in front;

arr.unshift(50);
console.log(arr[0]);

// delete array elements from back
let d=arr.pop(); // it returns the poped elements
console.log(d);

// delete from front;
let e=arr.unshift();
console.log(e);


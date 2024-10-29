// array destructuring

let arr = [5, 10, 45, 85, 4, 1, 4];
let [a, b, ...[]] = arr;
console.log(a);
console.log(b);
arr.unshift(15);
// console.log(typeof a);

console.log(a === arr[0]);

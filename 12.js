// reduce method
// reduce use to add elements
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];



let sum = arr.reduce((a, b)=> {
  a = a + b;
  return a;
},0);
console.log(sum);
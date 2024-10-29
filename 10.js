// methods in array ->map method
// the basic diff b/w map and foreach is that map return array and foreach modified the original array only 
let arr = [2, 4, 6, 8, 10, 12, 45, 6, 7, 8, 9, 6, 0];
console.log(arr);

function square(value){
  return value*2;
}

let b = arr.map(square);
 
console.log(b);

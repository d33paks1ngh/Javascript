// intro to objects
// object stores key value pair
// keys in objects are always in string
let a = {
  name: "ram",
  age: 18,
  gender: "M",
};

a.weight = 60;
// console.log(a)
// console.log(a[""])
// console.log(typeof(a))
console.log(a);
// let c=Object.keys(a);
// console.log(Object.keys(a));

for(let i in a){
    console.log(i,a[i]);
}

let b=Object.keys(a); // object.keys always return array;


console.log(b);
// console.log(Array.isArray(b))


// for_of and for_each can be use on array
for(let i of b){
    console.log(a[i])
}



b.forEach(element => {
    console.log(element,a[element])
});

// type of operators

let a=150;
console.log(typeof(a));

let b="string";
console.log(typeof(b));

//convert string to number;
console.log(typeof(+b)); // b bs yaha change hua hai
console.log(typeof(b));
b=Number(b);// b pure code me change ho gya hoke number ban gya
console.log(typeof(b));

// convert number to string

console.log(typeof(""+a)); // a bs yaha change hua hai
a=String(a); // a pure code me change hoke string ho gya hai;
console.log(typeof(a));

// type of undefined ,NULl, symbol


console.log(typeof(null)); // object

console.log(typeof(undefined)) // undefined
console.log(typeof(Symbol)) // function

let d=14524n;
console.log(typeof(d)); // big int

let e;
console.log(typeof(e))// undefined;
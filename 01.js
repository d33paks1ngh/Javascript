//string methods
// string always returns  the result in new string..
//JavaScript Strings are immutable since once a string is created it will receive a reference in the memory and its value will never change. This means that any operation on a string may give the new string without mutating the main string.

let a = "    deepak singh";
console.log(a);

//trim method

let b = a.trim();
console.log(b);

// uppercase method

let c = b.toUpperCase();
console.log(c);

// tolowercase method

let d=c.toLowerCase();
console.log(d);

// slice method 

let e=d.slice(0,4);
console.log(e);


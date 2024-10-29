// function statement

// basic diff between fun statement and expression is hoistion
// a();
// b();

function a() {
  console.log("a is called");
}

// function expression
var b = function () {
  console.log("b is called");
};

// anonomous function

// anonomous function is used to assign some value to a variable

// function (){
//     console.log("anonomous is called");
// }

// named anonomous function

var c = function abc() {
  console.log("abc is called");
};
c(); // works fine but
abc(); // gives error bcz it is a local varible of the function here it only works inside the function




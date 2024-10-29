// find method->always return true or false;
// always return the first occurance 

// let arr=[2,4,6,8,10,23];
// let b=arr.find((a)=>{
//     if(a==28) return true;
// });
// console.log(b);

let user = [
  {
    userid: 1,
    Name: "ram",
    age: 18,
  },
  {
    userid: 2,
    Name: "sita",
    age: 16,
  },
  {
    userid: 3,
    Name: "laxman",
    age: 18,
  },
];

// user.forEach((value,index)=>{
//     console.log(value,index);
// });
 
let b=user.find((value)=>{
 return (value.age==18)  ;
})




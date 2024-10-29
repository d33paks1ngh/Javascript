// loops in array
let arr=[2,4,6,8,10,12,14,18];

// tradition for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for of loop -> traverse elements in array
/*for(let element of arr){
    console.log(element)
}*/

// for in loop-> traverse index in array
// for(let a in arr){
//     console.log(arr[a]);
// }

// for each loop
 function print(no,index){
    console.log("value is",`${no}`," and index is",`${index}`);
}
arr.forEach((no, index) =>{
//   console.log("value is", `${no}`, " and index is", `${index}`);
arr[index]=no+index;
});

// for of loop
for(let i of arr){
    console.log(i);
}

// for in loop
for(let i in arr){
    console.log(arr[i]);
};

// for loop

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// for each loop
// you can create any function inside for each method like normal fun, arrow function
arr.forEach((index,item)=>{
    console.log(index,item);
})

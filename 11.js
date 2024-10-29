// filter

// filter return true/false
// if fun return true value is stored in the array else not;

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,14];
let arr = [
  { itemName: "apple", price: 1000, rating: 4 },
  {
    itemName: "orange",
    price: 2000,
    rating: 3,
  },
  {
    itemName: "uukkh",
    price: 785,
    rating: 2.8,
  },
  {
    itemName: "papaya",
    price: 1200,
    rating: 4.5,
  },
  {
    itemName: "runi",
    price: 1400,
    rating: 4.2,
  },
  { itemName: "bel", price: 600, rating: 3.5 },
];

let arr2 = arr.filter((value) => {
  return value.price < 1000 && value.rating < 4;
});

for(let value of arr2){
  console.log(value.itemName)
}


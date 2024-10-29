// this keyword , call ,bind and apply
let user1 = {
  name: "ram",
  age: 18,
  gender: "M",
  about: function (a,b) {
    console.log(this.name, this.age, this.gender,a,b);
  },
};
let user2 = {
  name: "sita",
  age: 16,
  gender: "F",
};

// call method is use to manupulate the value of this keyword;

user1.about.call(user1,"god","dasrath");
user1.about.call(user2,"goddness","janak");

// the basic diff b/w call and apply is that in apply the arguments are sent usinng array


user1.about.apply(user1, ["god", "dasrath"]);
user1.about.apply(user2, ["goddness","janak"]);


// bind return the function


let a=user1.about.bind(user1, "god", "dasrath");
let b=user1.about.bind(user2, "goddness", "janak");
a();
b();
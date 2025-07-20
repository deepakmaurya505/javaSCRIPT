// singleton
// object.create :- it is a constructor method, here singleton is formed


// object literals

const mySym = Symbol("key1")

const JsUser = {
    "full name": "Rohit Khatri",
   [mySym]: "mykey1",      // to use symbols as symbols not strings
    name: "Deepak",        // key : value pairs, both are strings
    age: 18,
    location: "Jaipur",
    email: "mauryaji2404@gmail.com",
    isLoggedInn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // first method to access elements
// console.log(JsUser["email"])  // second method to access elements
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) 

// JsUser.email = "andjwnfnefn@3344gmail.com" // to change or override any element
// Object.freeze(JsUser)  // after freezing any element it can't be changed
// JsUser.email = "1234567890gmail.com"
// console.log(JsUser);

/********************** FUNCTIONS ******************** */

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Stack (Primiitive) memory:-       // Heap (non-primitive) memory:-
// Here we will get a copy of        // here we will get reference 
// variable.                         // of the variable
// e.g.- boolean,string, integer      // e.g.- object, array

let myName = "DeepakMaurya"
let anotherName = myName

anotherName = "Chaman"

console.log(myName);
console.log(anotherName);

let user1 = { 
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "deepak@google.com"

console.log(user1.email);
console.log(user2.email);

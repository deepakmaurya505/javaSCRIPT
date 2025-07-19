"use strict"; // treat all JS code as newer version 
 
//alert(3+3) // we are using nodejs, not  browser

console.log(3+3);

console.log("Deepak"); // code readability should be high

let name = "Deepak" // string '',""
let age = 18        // Int 
let isLoggedIn = false // Boolean

// null => standalone value :- it is assigned to represent nothing is here
// undefined => 
// symbol => unique
// object    
console.log(typeof "Deepak");
console.log(typeof age)
console.log(typeof null); //object
console.log(typeof undefined); // undefined


//  Primitive datatypes

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID)

const bigNumber = 3737474484683n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaKtiman", "Naagraj", "deogesh"];
let myObj = {
    name: "Deepak",
    age: 22,
}

const myFUNCTION = function(){
    console.log("Hello World")
}
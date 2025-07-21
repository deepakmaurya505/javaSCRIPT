// Immediadtely Invoked Function Expression (IIFE)
// Global scope ke pollution se problem hoti hai kai baar, usse hatane ke liye iife ka use karte hai

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   // (func defination)(func call)
})();

/***************  same above function as arrow function  ***************/

((name) => {
    // un-named or simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Deepak'); 
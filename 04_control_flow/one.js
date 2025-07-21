/********************* if statement ************************/ 

// if (condition) {
//     // condition should be true to for execution of if block
//     // comparison operator:-
//     // <, >, <=, >=, ==, !=, ===(it checks datatype also), !==
// }


if (2 == "2") {
    console.log("executed");
    
}
if (2 === "2") {
    console.log("executed");
    
}

/************************* if-else *************************/ 

if (condition) {
    // either if block execute or
} else {
    // else block execute whose condition is true
}    

/************************ nested if-else **************************/

const balance = 1000

if (balance < 500) {
    console.log("less than 500");    
}else if (balance < 750) {
    console.log("less than 750");
}else if (balance < 900) {
    console.log("less than 900");
}else  {
    console.log("less than 1200");
}

const userLoggedInn = true
const debitCard = true
const LoggedInFromGoogle = flase
const LoggedInFromEmail = true

if (userLoggedInn && debitCard && 2==2) {
    console.log("Allow to buy course");    
}
if (LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User logged in");
    
}
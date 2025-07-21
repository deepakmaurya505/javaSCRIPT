

function sayMyName(){
console.log("H");
console.log("u");
console.log("y");
console.log("t");
console.log("r");
console.log("e");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result                 // ek baar return karnke ke baad niche ka kuch nahi chalega
    console.log("Deepak"); //   ->     // print nahi hoha
}

const result = addTwoNumbers(3,5)

// console.log("Result:", result);         // console log me 8 print hoga lekin agar return nahi kar rahe ho ans to result undefined aayega

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Deepak"))
// console.log(loginUserMessage());   // result undefined aayega


function calculateCartPrice(...number1){        // ...(triple dot) is rest operator
       return number1                           // depending upon the use ...(triple dot) behaves like rest or spread
}                                               // rest operator convert multiple values into arrays

console.log(calculateCartPrice(200,300,400))
// 
const user = {
    username: "Raand",
    price: 2
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)  :- here we have to check type safety

handleObject({
    username: "sam",           // Direct objecgt isse me bana ke pass karo
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 5000, 600]));  // direct yahi pe bana ke bhi passs kar skate hai

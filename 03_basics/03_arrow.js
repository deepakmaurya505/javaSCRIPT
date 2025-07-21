/******************** this keyword *********************** */

const user = {
    username: "Deepak",
    price: 999,

    welcomeMessage: function(){         // this keyword refers to current context
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage() // yaha tak current context me username Deepak tha to wahi print hua "this" keyword ka use karne pe
// user.username = "sam"  // now current context me username change ho gaya to 'this' ka use karne pe sam print hoga
// user.welcomeMessage()

// console.log(this);

// browser ke andar jo object hai vo hai window object


/***********************  Arrow function  ************************** */

// function chai(){
//     let username = "Deepak"
//     console.log(this.username); // function ke andar aise this keyword kaam nahi krta
// }

// chai()

// const chai = function (){
//     let username = "Deepak"          // aise bhi undefined aayega
//     console.log(this.username);
// }

const chai =  () => {   // arrow function aise banta hai   () => {}
    let username = "Deepak"         // yaha pe bhi this keyword ka use nahi akr sakte
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/*********************  implicit return  ********************* */  // () => {}

// const addTwo = (num1, num2) => (num1 + num2)         // {} ye bracket use karoge to return statement likhna he padega
                                                     // () ye bracket use karoge to return statement nahi likhna padega

const addTwo = (num1, num2) => ({username: "Deepak"})    // object return karne ke liye {} me he likhna padega                                                 

 console.log(addTwo(3,4));

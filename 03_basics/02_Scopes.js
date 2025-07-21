/************************  Scope ************************* */
// scope are of two types:- Global and local scope

let a = 100
var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30    // var kitne baar bhi change ho skta hai jitne baar declare karo( so dont use var)

// console.log("INNER: ", a);

}

// console.log("OUTER: ", a);
// // console.log(b);  // b is not defined outside
// console.log(c);   // yaha 30 print hoga 


/********************** Nested Scope ************************ */

function one(){
    const username = "Deepak"

    function two(){
        const website = "youtube"         // parent child ice-cream wala example
        console.log(username);            // andar wala apne just baahar ka sab kuch access kar sakta because wahi uske liye global hai
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const username = "Deepak"
    if (username === "Deepak") {
        const website = " youtube"           //  same as above example
        console.log(username + website);
    }
    // console.log(website)
}
// console.log(username);


/*********************  interesting example ********************** */

addone(5)    // isko aise likhenge to chalega
              // firstly call then declaration sahi hai yaha pe
function addone(num) {
       return num + 1     
}

/******************************************************** */

// addTwo(5)             // isko aise likhenge to nahi chalega
                         // system bolega main addTwo ko janta he nahi hu
const addTwo = function(num){      // firstly call then declaration galat hai yaha pe
    return num + 2
}


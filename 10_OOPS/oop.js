/****************** Object Literals ********************/

const user = {
    username: "Deepak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detailsfrom database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


/****************** constructor functions ******************/

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    return this
}

const userOne = new User("Deepak", 12, true)
const userTwo = new User("mauryaji", 10, false) 
console.log(userOne);

// jaise he new keyword ka use hota hai to ek empty object create hota hai {}
// isko hum log instance bhi bolte hai
// and mera constructor call hota hai new keyword ke kaaran( call at the time of object creation)
const promiseOne = new Promise(function(resolve, reject){
    //  Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()   // ye line mera resolve and .then ko connect karta hai
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

/*******************************************/

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

/*******************************************/

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); // resolve se jo pass hokar aaya hai vo print ho jayega
})

/*******************************************/

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "Deepak", password: "123"})
        }else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then((username_JO_abhi_upar_se_aaya_hai) => {    //this is chaining for gettin inner details
    console.log(username_JO_abhi_upar_se_aaya_hai);
}).catch(function(error){
    console.log(error);  
}).finally(() => {console.log("The promise is either resolved or rejected");

})

/*******************************************/

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "JavaScript", password: "123"})
        }else {
            reject('ERROR: JS  went wrong')
        }
    },1000)
})

async function consumePromiseFive(){ // async await cannot directly handle error
   try {
       const response =  await promiseFive
       console.log(response);
   } catch (error) {
       console.log(error);
   }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// } 
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/user')
.then((response) => {
      return response.json()
})
.then((data) => {
    console.log(data);   
})
.catch((error) => console.log(error));




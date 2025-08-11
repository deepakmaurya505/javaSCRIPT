function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){

    // SetUsername(username) // yaha call ho he nahi raha sirf reference pass ho raha hai
    
    SetUsername.call(this, username) // .call is used for explicitly calling and here 'this' is passing khud ka reference so  
                                    //  that upar wale function ka kaam hone ke baad vo call stack se hatt jayega lekin this wali chize dekar jayega
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

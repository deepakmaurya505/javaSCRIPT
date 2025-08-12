class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createid(){ // static keyword could not allow child classes to access method
        return `123`
    }
}

const Deepak = new User("deepak")
// console.log(Deepak.createid());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createid());

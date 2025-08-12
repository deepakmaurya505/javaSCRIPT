class User {
    constructor(email, password){
        this.password = password;
        this.email = email;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}deepak`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User ("hitesh@.123", "abc")
console.log(hitesh.password);
console.log(hitesh.email);

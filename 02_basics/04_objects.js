// const tinderUser = new Object() // singleton object
const tinderUser = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "deepu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com", 
    fullname: {            // nested objects
        userFULLname: {
            firstname: "Deepak",
            lastname: "Maurya"
        }
    }
}

// console.log(regularUser.fullname.userFULLname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2} // object ke andar object

// const obj4 = Object.assign(obj1, obj2, obj3) // obj1 is target and obj2,obj3 is source

// const obj4 = Object.assign({}, obj1, obj2, obj3) // {}:- this is target & obj1,obj2,obj3 is source
                                                   // both are correct but 2nd one is more precise

/*********************  Spread in objects *********************** */

const obj4 = {...obj1, ...obj2,...obj3}             
// console.log(obj4) 

/***************** Array of objects ************************** */

const users = [
    {
        id: 1,
        email: "necnn2.com"
    },
    {
        id: 1,
        email: "necnn2.com"
    },
    {
        id: 1,
        email: "necnn2.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // convert every key:value pair into an array element

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // boolean result (consist this property or not)

/***************** de-structuring of objects ****************** */

const course ={
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Chai wala"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // destucturing of objects

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hoalalalala",
//     "coursename": "jai ho",       // json is a type of object
//     "price": "free"
// }

// end
/********************** for of loop *********************/

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
       
}

const greetings = "Heello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

/****************** Maps *******************/

const map = new Map()     // dublicates are not allowed
map.set ('IN', "India")
map.set ('USA', "United States of Americe")
map.set ('Fr', "France")
map.set ('IN', "India")

// console.log(map);

for (const [key,value] of map) {   // destructuring of array
   // console.log(key, ':-', value);
    
}

/**************** forof loop on object ****************/

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}                              // objects are not iterable by using forof loop

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
//     }
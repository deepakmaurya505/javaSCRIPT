// array

const myArray = [2,4,5,7,true] // JS arrays are resizable
const myHeroes = ["shaktiman", "nagaraj", "popoyee"]

const myArr = new Array (1,5,3,7,6,9)
// console.log(myArr[2]);

// @@@@@@@@@@ Array Methods @@@@@@@@@@@@@@

/*
myArr.push(6)
myArr.push(7)
myArr.pop()       // remove last element
            */  
/*           
myArr.unshift(9)  // add elements in starting
myArr.shift()     // remove first element
             */
     /*        
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
                                 */
/*
const newArr = myArr.join()   // bind and convert array into string

console.log(myArr);
console.log(typeof newArr);
 */

// @@@@@@@@@@@@@@@@@@@@ slice , splice @@@@@@@@@@@@@@@@@@@@@

console.log("A ", myArr)

const myn1 = myArr.slice(1,4) // not include 4
console.log("slicing ", myn1);

console.log("After slicing", myArr) // no change in original array

const myn2 = myArr.splice(1,4)  // includes the last range
console.log("Splicing ", myn2);

console.log("After splicing ", myArr); // splicing remove that range values from original array
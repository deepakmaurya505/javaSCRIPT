// ########################## Numbers #############################

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'))

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@ Maths @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6)); // round off value
console.log(Math.ceil(4.2));  // uper value = 5
console.log(Math.floor(4.9));  // lower value = 4
console.log(Math.min(4,2,7,9));
console.log(Math.max(4,3,7,9));


console.log(Math.random());  // generate random values b/w 0-1
console.log((Math.random()*10) +1);  //generate random values greater than 1 <= 9
console.log(Math.floor(Math.random()*10) +1); // integer value 1=< value =<9
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

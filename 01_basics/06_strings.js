const name = "Deepak"
const repoCount = 50

// console.log(name + repoCount + " value"); // traditional method for string concatenation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// using backticks for sting concatenation

const getName = new String("hola-le-la-le") // another way to declare sting

console.log(getName[0]);
console.log(getName.__proto__);

console.log(getName.length);
console.log(getName.toUpperCase());
console.log(getName.charAt(4));
console.log(getName.indexOf("h"));

const newString = getName.substring(0,4) // not consider negative value
console.log(newString);

const anotherString = getName.slice (-8,4) // consider negative value
console.log(anotherString);

const newStringone = "    Deep    "
console.log(newStringone)
console.log(newStringone.trim());  

const url = "https://Deepak.com/deepak%20Maurya"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(getName.split('-')) // convert string into array
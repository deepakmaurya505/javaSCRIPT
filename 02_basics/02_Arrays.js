const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

/* ************** PUSH ********************/

// marvel_heros.push(dc_heros) // add dc array as an element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // accesseing dc array as an element then accessing elements of dc

/* *************** CONCAT *****************/

// const allHeroes = marvel_heros.concat(dc_heros) // concat merges two or more arrays
// console.log(allHeroes);

/****************  Spread   ****************** */

const all_new_heroes = [...marvel_heros, ...dc_heros] // spread all elements and combines it new variable(array)

// console.log(all_new_heroes);

/******************** .flat  ***************** */

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

/******************** array conversion  *********** */

console.log(Array.isArray("DeepakMaurya")) // asking that it is array ?
console.log(Array.from("DeepakMaurya"))   // converting into array
console.log(Array.from({name: "DeepakMaurya"}))  // give blank array (we have to provide that which one is to convert into array i.e. Keys or Values)

/****************** .of ****************** */ 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // covert multiple values into array
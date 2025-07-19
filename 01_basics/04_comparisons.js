//  comparators :- ==, !=, >, <, >=,<=
// console.log(2 > 1);

console.log("2" > 1);
console.log("02" > 1);

 
console.log(null > 0);     // comparisons convert null to a number, treating it as 0.
console.log(null == 0);
console.log(null >= 0);     // That's why (3) null >=0 is true and (1) null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);    //avoid these types comparisons
console.log(undefined < 0);

// === strictly checks values as well as datatypes 

console.log("2" === 2);
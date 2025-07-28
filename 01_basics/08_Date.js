// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 1, 17) // month starts from 0 in array in JS
console.log(myCreatedDate.toDateString())

// let Datetime = new Date(2025, 2, 19, 5, 3)
let Datetime = new Date("01-14-2025") // month starts from 1 as double digit
console.log(Datetime.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{     // customize date format
    weekday: "long"
})
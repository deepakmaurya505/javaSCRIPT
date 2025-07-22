/******************* forEach loop *********************/


const coding = [ "js", "rb", "py", "java", "cpp"]

// coding.forEach( function (item) {    // callback func ka naam nahi hota
//     console.log(item);
    
// } )  

/************** using arrow function **************/

// coding.forEach( (item) => {
//     console.log(item);
    
// } )
/******************************************/
function printme(item) {
    console.log(item);
    
}
// coding.forEach(printme)

/****************************************/

coding.forEach( (item, index, arr) => {
  //  console.log(item, index, arr );
    
} )

/***************** objects in array *************************/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )
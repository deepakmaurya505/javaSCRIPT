/******************** for in loop ********************/

const myObject = {
    js: 'javascrint',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = [ "js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);  // forin loop me aise humko sirf array ke index milenge not values
    console.log(programming[key]);
    
}

const map = new Map()     // dublicates are not allowed
map.set ('IN', "India")
map.set ('USA', "United States of Americe")
map.set ('Fr', "France")
map.set ('IN', "India")           

for (const key in map) {
    console.log(key);         // map are not iterable by forin loop
    
}
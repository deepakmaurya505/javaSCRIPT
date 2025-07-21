/******************** for loop *********************/

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
    //    console.log("5 is best answer");      
    }
//    console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
      //  console.log(i + '*' + j + ' = ' + i*j); 
    }
    
}

let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
   // console.log(element);
    
}

/********************* break & continue *********************/

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5 end`);
        break;
    }
     console.log(`value of i is ${index}`);
}
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5 and move on`);
        continue;
    }
     console.log(`value of i is ${index}`);
}
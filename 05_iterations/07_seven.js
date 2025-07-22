const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num+10)
 // [11, 12, 13, 14, 15, 16 ,17, 18, 19, 20]

 /**************** Chaining *****************/

const newNums = myNumbers
        .map( (num) => num * 10 )
        .map( (num) => num + 1 ) // yaha pe jo num hoga vo just upar se jo pass hokar aaya hai wo value hogi
        .filter( (num) => num >= 40) // flter matlab jo value true hogi wahi aayegi
        
 console.log(newNums);
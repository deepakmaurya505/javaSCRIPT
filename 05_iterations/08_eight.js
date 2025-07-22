/***************** Reduce *****************/

 const myNums = [1, 2, 3, 4]
                                                          // currval:- current value :- it is the element of array, object etc
// const myTotal = myNums.reduce(function(acc, currval){  // acc:- accumulator
//     console.log(`acc: ${acc} and currval: ${currval}`); // in every step acc follows acc = acc+currval
//     return acc + currval

// }, 0) // 0 is the first acc value we have assigned

// output:-
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// acc: 6 and currval: 4

// console.log(myTotal);

/************ Reduce by using arrow function *************/

const myTotal = myNums.reduce( (acc, curr) => (acc+curr),0)

// console.log(myTotal);

/****************** Another example ******************/

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(priceToPay);

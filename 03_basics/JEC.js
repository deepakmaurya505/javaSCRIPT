/*********************  Java Execution context  *******************/

/*    JEC :- how JS files/program execute
        => basically two execution context
           1. Global EC (this)
           2. Functional EC
           3. Eval EC (abhi utna zaruri nahi hai)

      => program files runs in two phase (Global to hga ha uske baad do)
         1. Memory Creation phase
         2. Execution Phase              */


/**************** Example *********************/
/*
 let val1 = 10
 let val2 = 10
 function addnum(num1, num2){
    let total = num1 + num2
    return total
 }
 let result1 = addnum(val1, val2)
 let result2 = addnum(10, 2)


/**************** how this program runs ********************/
/*
1. Global Execution -> this

2. Memory phase ( saare variables ko ekattha kiya jata hai or bss rakha jata hai apne pass me)

    val1 -> undefined
    val2 -> undefined
    addnum -> defination           (num1, num2){
                             let total = num1 + num2
                             return total
                             }
    result1 -> undefined
    result2 -> undefined

3. Execution Phase ( saare operations perform hote hai +,-,*,/)
   
   val1 <- 10
   val2 <- 5          ____________________________// new  executional context
   addnum ----------> |                          |
   result1 <- 15      | new variable environment |                    
                      |         +                |   //  this new executional 
                      | execution thread         |   //  context is deleted after
                      |__________________________|_  //  perfroming its work
                                   |
                                   |
    _______________________________|__________________________                      |
    |                                                         |
    V                                                         V
Memory Phase                                         Execution context

val1 -> undefined                                    num1 <-10
val2 -> undefined                                    num2 <-5
total -> undefined                                   total <-15 ( this total is 
                                                                  return to the global    
                                                                  execution)

// same aise he result2 ke liye bhi hoga
   ___________
   |  NVE    |
   |   +     |
   | Thread  |
   |_________|




/**************  Call Stack  ***************/   
/*

function one(){
    two()
}
function two(){
    three()                      
}
function three(){
   // statements
}
one()
two()
three()

                  |  three()    |
                  |             |
                  |  two()      | 
                  |             |
                  |  one()      |
                  |_____________|    // just like stack ( follows LIFO rule) 
                  |GLOBAL Exec  |
                  |_____________|


*/                  
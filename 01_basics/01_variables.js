const accountID = 144332 
let accountEmail = "mauryaji2404@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountID = 2 // const can't be change

accountEmail = "hebbdb.com"
accountPassword = "22334844"
accountCity = "Banaras"

console .log(accountID);

/* prefer not to use var:_
 because of issue in block scope and functional scope*/

console.table([accountID,accountEmail, accountPassword, accountCity, accountState])
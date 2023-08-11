// const amount=12
// if(amount<14){
//     console.log('small number');
// }else{
//     console.log('big number');
// }

// console.log(`hey it's my first node app`);
// console.log(__dirname);
// console.log(__filename);


// Console is terminal window 
console.log("Hello Node");

//global object instead of window object
// console.log(global);

//Has common core modules that we'll explore 
//common js modules instead of ES6 modules
//i have added a configuration setting that will wipe out priviosly runned code.
const os = require('os');
const path = require('path')
const {add,subtract,divide,multiply} = require('./math')

//using imported functions

console.log(add(2,4))
console.log(subtract(3,5))
console.log(divide(6,2))
console.log(multiply(4,5))


/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(os.hostname())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
*/

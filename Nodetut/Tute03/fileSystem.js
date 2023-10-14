const fs = require('fs');
const os = require('os');

// todo: sync...
// fs.writeFileSync('./notes.txt', 'My name is Aditya Kumar');

// todo Async..
// fs.writeFile("./test.txt","oh! hi ",(err)=>{

// });

// const result = fs.readFileSync('./test.txt','utf-8');
// console.log(result); //sync.. task give you result in a variable or let you store the output

/*
todo: this doesn't let store in variable 
fs.readFile('./test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);

}); 
*/
/*
todo=> appending in a file 

fs.appendFileSync('./test.txt',"\n hello world");
*/


//todo => copy a file 
// fs.cpSync('./test.txt','./test2.txt');



 // todo => delete a file
//  fs.unlinkSync('./test2.txt');


 //todo=> seeing stats of a file 

//  console.log(fs.statSync('./test.txt'));

//todo=> making directory

// fs.mkdirSync('./newdir/subdir/subbdir',{recursive:true});

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
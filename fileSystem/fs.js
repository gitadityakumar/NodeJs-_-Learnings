const fs = require('fs');

const path = require('path');
//Reading file
fs.readFile(path.join(__dirname,'starter.txt'),'utf-8',(err,data)=>{
    if(err)throw err;
    console.log(data);
})

// writing file
fs.writeFile(path.join(__dirname,'writefile.txt',),'this is the content of writefile',(err)=>{
    if(err) throw err;
    console.log("writing complete");

    fs.appendFile(path.join(__dirname,'writefile.txt',),'\n\n Hello How  are u',(err)=>{
        if(err) throw err;
        console.log("append complete");

        fs.rename(path.join(__dirname,'writefile.txt'),path.join(__dirname,'renamefile.txt'),(err)=>{
            if(err) throw err
            console.log('rename complete');
       });
    })

   
    
  
})

//appending file  => this also creates a new file 
fs.appendFile(path.join(__dirname,'appendfile.txt',),' Hello i am appending this statement this will also create a new file ',(err)=>{
    if(err) throw err;
    console.log("append complete");
})

//this method of reading file is more convinient bcz we don't need to deal with / (backticks) as these changes with operating system



/*
fs.readFile('./fileSystem/starter.txt' ,'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
})
*/
//here i am trying to demonstarte that in general functions and methods in node are asynchronus in bhaviour
console.log('hello ....');

//exit on uncaught error

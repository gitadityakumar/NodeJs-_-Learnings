const fspromises = require('fs').promises;
const path = require('path');

const fileops = async () => {
    try{
        const data = await fspromises.readFile(path.join(__dirname,'starter.txt'),'utf8');
        console.log(data);
        await fspromises.writeFile(path.join(__dirname,'promisewrite.txt'),data);
        await fspromises.appendFile(path.join(__dirname,'promisewrite.txt'),'\, this is promise append');
        await fspromises.rename(path.join(__dirname,'promisewrite.txt'),path.join(__dirname,'promiseRename.txt'));
        const newData = await fspromises.readFile(path.join(__dirname,'promiseRename.txt'),'utf-8');
        await fspromises.unlink(path.join(__dirname,'starter.txt')); //it deletes the file  so if you will run this code you will get an err object to avoid error make a starter.txt file insie FileSystem folder
        console.log(newData);
        
    }catch(err){
        console.error(err);
    }
}

fileops();
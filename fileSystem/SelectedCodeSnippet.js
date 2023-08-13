fs.appendFile(path.join(__dirname,'appendfile.txt',),' Hello i am appending this statement this will also create a new file ',(err)=>{
    if(err) throw err;
    console.log("append complete");
})
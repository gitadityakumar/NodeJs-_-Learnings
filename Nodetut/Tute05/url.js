const http = require('http');
const fs = require('fs');
const url = require('url');

// creating a server and added log 
const server = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.method} ${req.url} New Req Recieved\n`
    const myurl = url.parse(req.url, true);
    console.log(myurl);
   fs.appendFile('server.log', log,(err,data)=>{
    switch(myurl.pathname){
        case '/':
            res.end("Welcome to the home page");
            break;
        case '/about':
            res.end("Hi i am Aditya kumar");
            break;
        default:
            res.end("404 Not Found");
            break;
    }
   }
   );
    
});

//Listing a server on a port

server.listen(8000,  () => console.log("Server is here http://localhost:8000"));
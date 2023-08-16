const http = require('http');
const fs = require('fs');
const fspromises = require('fs').promises;
const path = require('path');
const logEvents = require('./logEvent');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter { };
//initialize the obj
const myEmitter = new MyEmitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);

});

server.listen(PORT, ()=> {
    console.log('Server running on port 3500');
});

//add Listner for  the event 
// myEmitter.on('log', (msg)=> logEvents(msg));
// setTimeout(()=> {
//     //Emit event
//     myEmitter.emit('log','Log event emitted')
// }, 2000);

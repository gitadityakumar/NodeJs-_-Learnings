const express = require('express');
const app = express();
const logEvents = require('./middleware/logEvent');

const path = require('path');
const PORT = process.env.PORT || 3500;


//custom middleware logger
app.use((req, res, next) => {
    console.log(`${req.method}\t${req.path}`);
    next();
});
//built in middleware to handle urlencoded data
//in other words , form data:
//'Content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({extended:false}));

//built in middleware for json data
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname,'/Public')));

//Todo: In express it by defalult sets status code 
//! Routes start here
app.get('^/$|/index(.html)?',(req,res)=>{
    // res.sendFile('./views/index.html', {root: __dirname});
        // res.send('Hello World');
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get(`/new-page(.html)?`,(req,res)=>{  
        res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});
app.get(`/old-page(.html)?`,(req,res)=>{
        res.redirect(301, '/new-page.html'); //by default 302 status code 
});

//! Routes Handlers
//Todo : Also function chaining   to learn more can watch dave's lec from 2:20:10 
app.get('/hello(.html)?', (req,res,next) => {
    console.log("Attemped to load hello.html");
    next()
}, (req,res) => {
    res.send("Hello World");
});
//chaning Routes Handlers

const one = (req,res,next) =>{
    console.log('one');
    next();
}
const two = (req,res,next) =>{
    console.log('two');
    next();
}
const three = (req,res,next) =>{
    console.log('three');
    res.send('chining is finished');
    
}
app.get('/chain(.html)?', [one,two,three]);
app.get('/*',(req,res)=>{  
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//
const express = require('express');
const app = express();
const { logger } = require('./middleware/logEvent');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors');

const path = require('path');
const PORT = process.env.PORT || 3500;

// Custom middleware logger
app.use(logger);

// CORS configuration
const whiteList = ['https://www.google.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Other middleware and routes...

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

// const one = (req,res,next) =>{
//     console.log('one');
//     next();
// }
// const two = (req,res,next) =>{
//     console.log('two');
//     next();
// }
// const three = (req,res) =>{
//     console.log('three');
//     res.send('chining is finished');
    
// }
// app.get('/chain(.html)?', [one,two,three]);
app.all('*',(req,res)=>{  
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }else if (req.accepts('json')){
        res.json({error:"404 Not Found"});

    }else{
        res.type('txt').send("404 Not Found");
    }
    
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//
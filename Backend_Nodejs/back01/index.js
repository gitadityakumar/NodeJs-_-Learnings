require('dotenv').config()
const express = require('express')
const app = express()
const port = 4500

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
})

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html');
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
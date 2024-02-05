const express = require('express');
const app = express();
const port = 3000;

app.get('/add',(req, res)=>{
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    res.json(num1+num2)
})

app.listen(port,(req, res)=>{
    console.log(`the server is running on ${port}`);
})
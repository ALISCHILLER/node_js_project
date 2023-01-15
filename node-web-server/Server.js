const express=require('express');

var app = express();

//GeT POST PUT PATCH DELETE -------------->Http Request
//http://www.google.ir/vuejs --->Get Request
app.get('/',(req,res)=>{
  res.send("<h1>hello express</h1>")
})


app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})
app.listen(3000);
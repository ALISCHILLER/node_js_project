const express=require('express');
const hbs=require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/Partials')

app.use(express.static(__dirname + '/public'))
app.set('view engie','hbs');





//GeT POST PUT PATCH DELETE -------------->Http Request
//http://www.google.ir/vuejs --->Get Request
// app.get('/',(req,res)=>{
//   res.send("<h1>hello express</h1>")
// })

// app.get('/',(req,res)=>{
//   res.send({
//     name:'hello',
//     website:[
//       'test1',
//       'test2'
//     ]
//   })
// })


app.get('/',(req,res)=>{
  res.render('home.hbs',{
    pageTitle:'صفحه اصلی',
    currentYear:new Date().getFullYear()
  })
})
app.get('/about',(req,res)=>{
    res.render('about.hbs', {
      pageTitle:'درباره ما 2',
      currentYear:new Date().getFullYear()
    })
})
app.listen(3000, () =>{

  console.log('Server ru o 300 Port')
});
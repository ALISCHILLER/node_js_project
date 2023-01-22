const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app = express();

hbs.registerPartials(__dirname + '/views/Partials')

app.use(express.static(__dirname + '/public'))
app.set('view engie','hbs');



//Middleware log time 
app.use((req,res,next)=>{
  var now=new Date();
  var log=` ${now}: ${req.method} ${req.url}`
  console.log(log)
  fs.appendFileSync('server.log',log + '\n')

  next();
})

//Middleware error site
// app.use((req,res,next)=>{
//   res.render('offline.hbs')
// })

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
})

hbs.registerHelper('upperCase', (text)=>{
  return text.toUpperCase();
})
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
    WelcomeMessage:'welcome to Site '
  })
})
app.get('/about',(req,res)=>{
    res.render('about.hbs', {
      pageTitle:'درباره ما 2'
    })
})
app.listen(3000, () =>{

  console.log('Server ru o 300 Port')
});
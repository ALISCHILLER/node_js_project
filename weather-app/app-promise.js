const yargs=require('yargs')
const axios=require('axios')

const argv=yargs
.options({
    a:{
      demand: true ,
      alias : 'city',
      describe: 'Fetch City for',
      string: true
     }
 })
 .help()
 .alias('help','h')
 .argv;

 var encodeCity= encodeURIComponent(argv.city)
 var url= `https://api.api-ninjas.com/v1/geocoding?city=${encodeCity}`;


 axios.get(url,{ headers: { 'X-Api-Key': 'fxfL0N2e1r6PRX0IGSZiIQ==WbzQpZrZmcq8DAiu' } }).then((response)=>{
    
     if(response.status != 200) return console.error('Error:', response.status, response);
     else if(response.status === 200){
        console.log(response.data[0], undefined , 2)
        var lat=response.data[0].latitude;
        var lon=response.data[0].longitude;
       var weatherurl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70c9ebc530f9b427972bf63416ab1718`;
        return axios.get(weatherurl);
     }
  
 }).then((response)=>{
   
    if(response.status != 200){
        return console.error('Error:', response.status, response);
     } else if(response.status === 200){
        console.log(response.data.main)
     }
 }).catch((errorMsg)=>{
    console.log(errorMsg)
 })



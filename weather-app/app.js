const yargs=require('yargs')
const geocoding=require('./geocoding/geocoding')
const weather=require('./weather/wheather')
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
 geocoding.geocodingCity(argv.city,(errorMsg,results)=>{

    if(errorMsg){
        console.error(errorMsg)
    }else{
        console.log(JSON.stringify(results,undefined,2));

        weather.getweather(44.34,10.99,(errorMsg,weatherResults)=>{
            if(errorMsg){
                console.error(errorMsg)
            }else{
                console.log(JSON.stringify(weatherResults,undefined,2));
            }
         });
         
    }
 });




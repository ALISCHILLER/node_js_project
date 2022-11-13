const request = require('request');
const yargs=require('yargs')
const geocoding=require('./geocoding/geocoding')
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
    }
 });



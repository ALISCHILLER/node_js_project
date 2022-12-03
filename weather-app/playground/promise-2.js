
const request =require('request');
var geocode =(address) =>{
    return new Promise((resolve ,reject) => {
        var encodeCity= encodeURIComponent(address)
        request({
            url: 'https://api.api-ninjas.com/v1/geocoding?city=' + encodeCity,
            json:true ,
            headers: {
              'X-Api-Key': 'fxfL0N2e1r6PRX0IGSZiIQ==WbzQpZrZmcq8DAiu'
            },
        },(error,response,body) =>{
            //console.log(body, undefined , 2);
            if(error){
                reject(`Request failed:${error}`);
            }
              else if(response.statusCode != 200) {
                reject('Error:'+response.statusCode+ body.toString('utf8'));
               }else{
                resolve({
                name: body[0].name,
                Latitude:  body[0].latitude,
                Longitude:  body[0].longitude,
                country:  body[0].country,
                stat:  body[0].stat
              })
            }
            // console.log(`Name: ${body[0].name}`);
            // console.log(`Latitude: ${body[0].latitude}`);
            // console.log(`Latitude: ${body[0].latitude}`);
            // console.log(`Country: ${body[0].country}`);
            // console.log(`State: ${body[0].state}`);
        });     

    })
} 


var city = 'london';

geocode(city).then((results)=>{
    console.log(JSON.stringify(results,undefined,2));
}).catch((errorMsg)=>{
    console.error(errorMsg)
})
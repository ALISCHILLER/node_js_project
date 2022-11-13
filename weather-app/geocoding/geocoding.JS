
const request =require('request');


var geocodingCity=(city,callback)=>{
    var encodeCity= encodeURIComponent(city)
    request({
        url: 'https://api.api-ninjas.com/v1/geocoding?city=' + encodeCity,
        json:true ,
        headers: {
          'X-Api-Key': 'fxfL0N2e1r6PRX0IGSZiIQ==WbzQpZrZmcq8DAiu'
        },
    },(error,response,body) =>{
        //console.log(body, undefined , 2);
        if(error){
            callback(`Request failed:${error}`);
        }
          else if(response.statusCode != 200) {
           callback('Error:'+response.statusCode+ body.toString('utf8'));
           }else{
           callback(undefined, {
            name: body[0].name,
            latitude:  body[0].latitude,
            latitude:  body[0].latitude,
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
}

module.exports.geocodingCity=geocodingCity

//var geocodingCity=()=>{
//  var city = 'london';

//  request.get({
//     url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
//     json:true ,
//     headers: {
//       'X-Api-Key': 'fxfL0N2e1r6PRX0IGSZiIQ==WbzQpZrZmcq8DAiu'
//     },
//   }, function(error, response, body) {
//     if(error) return console.error('Request failed:', error);
//     else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//     else console.log(body, undefined , 2)
//   });
//}
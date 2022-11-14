const request = require('request');

var getweather =(lat,lon,callback) =>{
    request({
        url:`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70c9ebc530f9b427972bf63416ab1718`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback(error)
        }else if(response.statusCode != 200){
           callback('Error:'+response.statusCode+ body.toString('utf8'))
        }else{
            callback(undefined,body.main);
        }
      
    })
}




module.exports.getweather=getweather
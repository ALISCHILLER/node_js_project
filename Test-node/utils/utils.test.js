const expect=require('expect')
const utils=require('./utils')

it("Should add two numbers",()=>{

var res=utils.add(22,11);

expect(res).toBE(44)
// if(res !==44){
//     throw new Error(`Result not equal to 44 ,res =${res}`)
// }
})



it("Should square two numbers",()=>{
    var res=utils.square(3);
    if(res!==9){
        throw new Error(`Square not equal to 10, res=${res}`)
    }
})
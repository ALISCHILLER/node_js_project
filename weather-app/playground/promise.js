var asycAdd = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b)
            }else{
                reject('Arguments must be  numbers')
            }

        },1500)
    })
}

asycAdd(5,7).then((res)=>{
    console.log('Result:',res)
    return asycAdd(res,33)
}).then((result)=>{
    console.log("Result should be 45",result)
}).catch((errorMessage)=>{
    console.log(errorMessage)
})

     //Sample 1
// var somePromise =new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("Hey , It 's Work!")
//         reject("promise not worck")
//     },2500)
    
// })

// somePromise.then((message)=>{
//     console.log('Success:', message)
// }, (message)=>{
//     console.log('Error:', message)
// });
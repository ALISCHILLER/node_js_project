var getUser=(id,callback)=>{
    var user ={
        id:id,
        name: "masoud"
    }
    setTimeout(() => {
        callback(user) 
    }, 3000);
   
}

getUser(31,(userobject)=>{
    console.log(userobject)
})
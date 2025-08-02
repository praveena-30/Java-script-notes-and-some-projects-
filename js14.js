 console.log("promises (asynchronous)")
 let promises = new Promise(
    (sucuss,failure) =>{
        let response = 100;
        if(response == 200){
            setTimeout(() =>{
                sucuss("This exute..");
            },2000)
        }
        else{
            setTimeout( ()=>{
                failure("something went wrong..")
            },3000)
        }
    }
 )
 promises.then((sucuss)=>{
    console.log(sucuss)
 },
 (failure)=>{
    console.log(failure)
 }

)
console.log("i am last")
console.log("async and await ")

function one(n){
    return n+1
}
function two(num,one){
    return num + one(num)
}
async function getresult(two,one) {
    let promises = new Promise(
    (sucuss,failure) =>{
        let response = 200;
        if(response == 200){
            setTimeout(() =>{
                sucuss(two(5,one))
            },2000)
        }
        else{
            setTimeout( () =>{
                failure("something went wrong..")
            },3000)
        }
    }
    
 )
    return promises
}
 getresult(two,one).then((sucuss)=>{
    console.log(sucuss)
 },
 (failure)=>{
    console.log(failure)
 }

)
console.log("Succussful")
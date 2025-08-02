console.log("Asynchronous")

function one(n){
    return n +1
}


function two(num, one){
    return num + one(num)
}

function output (value){
    let sum = two(value,one)

console.log(sum)
}





setTimeout(() =>{
    output(5)
},3000)

console.log('i am last')
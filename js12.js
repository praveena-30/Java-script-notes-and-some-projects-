console.log("Exception handling and javascript, try and catch")

let num1 = 50;
let num2 = 10;

try {
    console.log(divide(num1,num2))
}
catch(e){
    console.log(e)
}
finally{
    console.log("Executed succussfully")
}

function divide(num1,num2){
    if(num2 == 0){
        alert("I can't divide by 0..")
    }
    else{
        return num1/num2
    }
}


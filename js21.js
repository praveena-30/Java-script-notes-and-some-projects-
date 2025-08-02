let inp = document.getElementById("input")
let btn = document.getElementById("btn")

let given = 30

btn.addEventListener("click",()=>{
    let num = inp.value;
    compare(num)
})

function compare(num){
    if(num<0 || num <1000){
        alert("chose number between 0 to 100");
        
    }

    else if(num > given){
        alert("You number grater then given number")

    }
    else if(num <  given){
        alert("Your number smaller then given number.")
    
    }

    else{
        alert("You Won 😍")
    }
}


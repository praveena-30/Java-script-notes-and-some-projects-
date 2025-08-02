console.log("1st project counting number")

let countChild = document.getElementById("countChild")
let btn = document.getElementById("clickbtn")
let btn1 = document.getElementById("clickbtn1")
let count = 0;

btn.addEventListener("click",()=>{
    count ++ ;
     countChild.innerHTML = `<h1> Count: ${count} </h1>`
})

btn1.addEventListener("click",()=>{
    count--;
    countChild.innerHTML= `<h1>Count: ${count}</h1>`
})
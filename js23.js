let outputw = document.getElementById("output-w")
let outputh = document.getElementById("output-h")

let inputw = document.getElementById("input-w")
let inputh = document.getElementById("input-h")

let resbtn = document.getElementById("resbtn")

let weight = 40
let height = 40
result();
 
inputw.addEventListener('mousedown', (event) =>{
     inputw.addEventListener('mousemove',updatew)
})

inputh.addEventListener('mousedown', (event) =>{
    inputh.addEventListener('mousemove',updateh)
})


function updatew(event){
    let w = event.target.value;
    weight = w
    outputw.innerText = `${weight}Kg`
    result();
}


function updateh(event){
    let h = event.target.value;
    height = h
    outputh.innerHTML = `${height}Cm`;
    result();
}

function result(){
    let bmi = Math.floor(weight/((height/100)*(height/100)))
    resbtn.innerText = `BMI: ${bmi}`;
}

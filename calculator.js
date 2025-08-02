let display = document.getElementById('resultInput');
let btns = document.getElementById("btnbox")

btns.addEventListener("click",(event)=>{
    let tar = event.target.innerText;
    switch(tar){
       case 'AC': emty()
       break; 
       case '=': resultvalue()
       break;
       case'<': backspace()
       break;
       default: display.value += tar
       break;

    }

})

function emty(){
    display.value='';

}

function resultvalue(){
    let str = display.value;
    let res = eval(str)
    display.value = res;
}

function backspace(){
    let str = display.value.toString();
    console.log(str)
    display.value = str.slice(0, -1)
}
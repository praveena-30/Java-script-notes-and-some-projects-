console.log("event handling")

let btn = document.getElementById("mybtn");
let div = document.getElementById("boxdiv")
let input = document.getElementById("myinput")
let list = document.getElementById("list")
btn.addEventListener('click',()=>{
    btn.classList.toggle('click');
})

div.addEventListener('mousedown',()=>{
    div.innerHTML = 'mouse clicked';
})

div.addEventListener('mouseover',()=>{
    div.innerHTML='mouse over';
})
div.addEventListener('mouseout',()=>{
    div.innerHTML = 'mouse out'
})
input.addEventListener('keypress',(key)=>{
    div.innerHTML = `${key.key} is pressed`;
})
list.addEventListener('click', (ele)=>{
    if(ele.target.tagname='li'){
        let  name = (ele.target.getAttribute("name"))
        switch(name){
            case 'Home':div.innerHTML = `clicked home`;
            break;
            case 'About':div.innerHTML = `clicked about`;
            break;
            case 'Contact':div.innerHTML = `clicked contact`;
            break;
            case 'Career':div.innerHTML = `clicked career`;
            break;
        }
    }
})
let pressbox = document.getElementById("press")
let relesebox = document.getElementById("relese")

let btnon = document.getElementById("btnTurnon")
let btnoff = document.getElementById("btnTurnoff")

btnoff.addEventListener("click",()=>{
    document.removeEventListener("keydown",pressed)
    document.removeEventListener("keyup",relesed)
})

btnon.addEventListener("click",()=>{
    document.addEventListener("keydown",pressed)
    document.addEventListener("keyup",relesed)
})

function pressed (event){
    let key = event.key
    pressbox.innerHTML = `<h2> key${key} pressed </h2>`
}

function relesed(event){
    let key = event.key
    relesebox.innerHTML = `<h2>key ${key} relesed</h2>`
}
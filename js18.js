console.log("parentNode, childnode,sibling,appending")
let mainDIv = document.getElementById("main")  
let listU1 = document.getElementById("list")
let itemLi = document.getElementById(secondItem)

let divemty = document.getElementById('emty')
// console.log(mainDIv.children)
// console.log(mainDIv.nextElementSibling)
// console.log(mainDIv.lastChild)
// console.log(mainDIv.firstChild)

let Dataa = document.createElement("ol");

for (i=0;i<4;i++){
    Dataa.innerHTML += `<li>${i}</li>`
}

divemty.append(Dataa);
divemty.remove();

// pop up box(alert,confirm,prompt)


alert("This message is error")
let a = confirm("This page successed")
let b = prompt("enter the name")
console.log(a)
console.log(b)

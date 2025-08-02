// console.log("reverse-num")
// let num = 2004

// function numRev(num){
//     let  Num = 0;
//     while(num){
//         let temp = num % 10 
//         Num = (Num * 10) + temp
//         num = parseInt(num / 10);

//     }
//     return Num
// }
// console.log(numRev(num))



console.log("add-num")
let num = 106

function numRev(num){
    let  Num = 0;
    while(num){
        let temp = num % 10 
        Num += temp
        num = parseInt(num / 10);

    }
    return Num
}
console.log(numRev(num))
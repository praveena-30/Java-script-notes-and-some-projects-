console.log("Program-8")

let array = [10,20,4,60,60]
let key = 1
let isPraset = false

array.forEach(element =>{
    if (element == key){
        isPraset = true;
    }
});

if(isPraset){
    console.log("its prasent!")

}
else{
    console.log("its not prasent")
}
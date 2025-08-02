console.log("Palindrome")

let a = 102

original = a
reverse = 0

while(a > 0){
    let temp = a % 10;
    original = reverse * 10 + temp
    reverse = a / 10
}

if (original === reverse){
    console.log(original + "Its prime")

}
else{
    console.log(original + "its not prime ")
}
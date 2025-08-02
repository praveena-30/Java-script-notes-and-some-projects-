console.log("reverse array")

let arr = [10,20,30,40,50];
console.log(arr)

let start = 0;
let end  = arr.length-1;
while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
    
}
console.log(arr)
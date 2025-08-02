console.log("API,share the video")
let url = "https://jsonplaceholder.typicode.com/users"

async function getdata(url) {
    let data = await fetch(url)
    return data
}


let a = fetch(url);

a.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data)
})
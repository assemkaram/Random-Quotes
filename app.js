
let p=document.querySelector(".qoute")
let a=document.querySelector(".author")


let text;
function ranquote(){
    p.innerHTML=""
    a.innerHTML=""
fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then((data)=>{
        p.innerHTML+=`<i class="fa-solid fa-quote-left"></i><span>${data.quote}</span><i class="fa-solid fa-quote-right"></i>`
        a.innerHTML+=`${data.author}`
        text=data.quote;
});
}

ranquote();

function copy(){
    navigator.clipboard.writeText(text)
}
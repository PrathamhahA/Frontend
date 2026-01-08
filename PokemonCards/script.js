// var h=document.querySelector("h1");
var h=document.getElementById("main")
let arr=[
    "https://i.pinimg.com/1200x/13/fb/9b/13fb9b68eac74e5833888c2c7011c509.jpg",

    "https://i.pinimg.com/736x/05/3f/50/053f50fe48cbc691148b89906c37ddb1.jpg",

    "https://i.pinimg.com/1200x/de/c4/2f/dec42f0fc85e78453345ce6da65e2e9b.jpg",

    "https://i.pinimg.com/1200x/9f/36/81/9f3681cf0cd314f87d45c5cc19499b31.jpg",

    "https://i.pinimg.com/1200x/01/81/68/0181684ac16b75984de08d50f13f84d2.jpg"
]
var s="";
for(let i=0;i<60;i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card"><img src= ${arr[r]} alt="">
    </div>`;
}
h.innerHTML=s;



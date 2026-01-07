// DOM
// // let x=document.querySelector("h3");
// // console.log(x);
// // let x=document.querySelectorAll(".yes");
// // console.log(x);
// let x=document.querySelector("h2");
// // console.log()
// let y=document.querySelector("h1");
// // y.style.backgroundColor="Blue"
// // y.innerHTML="Changed"
// // --To display after 2 secound of display
// setTimeout(function(){
//     y.innerHTML="Changed"
// },2*1000);

// setTimeout(function(){
//     x.style.color="red";
//     x.style.fontFamily="Gill Sans";
// },5*1000);



// ---DOM Event Listners
// let x=document.querySelector("#ele1");
// or
let x=document.getElementById("ele1");//Pikachu
// x.style.color="Yellow";
// x.style.backgroundColor="red"
x.addEventListener("click",function(){
    x.style.color="Yellow";
    x.style.backgroundColor="red"

});
x.addEventListener("mouseleave",function(){
    x.style.color="black";
    x.style.backgroundColor="White"

});
let y=document.getElementById("ele2");//Charizard
y.addEventListener("mousemove",function(){
    y.style.color="White";
    y.style.backgroundColor="orange"
});
y.addEventListener("mouseleave",function(){
    y.style.color="Black";
    y.style.backgroundColor="White"
});

let z=document.getElementById("ele3");//Mewtow
y.addEventListener("click",function(){
    z.style.color="White";
    z.style.backgroundColor="purple"
});

z.addEventListener("click",function(){
    x.style.color="White";
    x.style.backgroundColor="green";
    x.innerHTML="Bulbasore"
});
z.addEventListener("mouseleave",function(){
    x.style.color="Black";
    x.style.backgroundColor="White";
    x.innerHTML="Pikachu"
});

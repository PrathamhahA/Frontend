let s1=document.getElementById("sq1");
// s1.style.backgroundColor="Red";
let s2=document.getElementById("sq2");
let s3=document.getElementById("sq3");
let s4=document.getElementById("sq4");
s1.addEventListener("mouseenter",function(){
    // s1.style.backgroundColor="Red";
    let r=Math.floor(Math.random()*100);
    s1.innerHTML="<h1>"+r+"</h1>";
    
});
s1.addEventListener("mouseleave",function(){
    // s1.style.backgroundColor="White";
    s1.innerHTML="<h1>1</h1>";
});
let clr="red"
s2.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*2);
    if(clr==="green"){
        s2.style.backgroundColor=clr;
        clr="red";
    }
    else{
        s2.style.backgroundColor=clr;
        clr="green";
    }
});
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="White"
})
s3.addEventListener("mouseenter",function(){
    // s1.style.backgroundColor="Red";


    let a=Math.floor(Math.random()*256);

    let b=Math.floor(Math.random()*256);

    let c=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${a},${b},${c})`;
    
});
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="White";
});

s4.addEventListener("click",function(){
    // s1.style.backgroundColor="Red";


    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    let d=Math.floor(Math.random()*256);
    let e=Math.floor(Math.random()*256);

    s1.style.backgroundColor=`rgb(${a},255,255)`;
    s2.style.backgroundColor=`rgb(255,${b},255)`;
    s3.style.backgroundColor=`rgb(255,255,${c})`;
});
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="White";
    s2.style.backgroundColor="White";
    s3.style.backgroundColor="White";
});

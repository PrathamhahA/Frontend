// print 1 to 10 with delay of 1 secound
function h(){
    console.log("Hello")

}
function m(){
    console.log("Mello")
}
// h();
// m();
setTimeout(h,2*1000);
setTimeout(m,1*1000);
// Direct function call
setTimeout(function(){
    console.log("hello");
},2*1000)

setTimeout(function(){
    console.log("mello");
},1*1000)
setTimeout(function(){
    console.log("aur bhai");
},5*1000)

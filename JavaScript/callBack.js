// call Back
function Products(a,b,c){
    return a*b*c;
}
function fun(x,y){
    // console.log(x-y);
    let a=x(2,5,4);
    console.log(a-y);
}
// console.log(Products(3,4,2));
// product become call back function
fun(Products,7)
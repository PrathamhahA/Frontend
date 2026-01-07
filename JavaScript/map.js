// create aray double of other array

function twice(x){
    return 2*x;
}
function square(x){
    return x*x;
}
let arr=[1,6,3,8];
console.log(arr);
let brr=[];

for (const ele of arr) {
    brr.push(ele*2);
}
// console.log(brr);
//                       OR
let crr=arr.map(twice)
console.log(crr);
let drr=arr.map(square);
console.log(drr);
let err=arr.map(function(ele){
    return ele+10;
});
console.log(err);
let frr=arr.map((ele)=>{
    return ele*ele*ele;
});
console.log(frr);
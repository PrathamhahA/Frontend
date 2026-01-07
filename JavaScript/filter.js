// Filter out element form 
let arr=[1,9,2,7,4,5,6,2,8];
console.log(arr);
let brr=arr.filter((ele)=>ele%2==0);
console.log(brr);
// console.log(10%2==0);
let crr=arr.filter((ele)=>{
    // console.log("Haha");
    return ele<=5});
console.log(crr);

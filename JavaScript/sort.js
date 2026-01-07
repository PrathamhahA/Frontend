let arr=[1,9,-2,-7,4,5,6,2,8];
console.log(arr);
arr=arr.sort();
console.log(arr);
// decresing order
arr=arr.sort(function(a,b){
    return b-a;
});
console.log(arr);
// incresing sort
arr=arr.sort(function(a,b){
    return a-b;
});
console.log(arr);
// absolue sort
arr=arr.sort(function(a,b){
    return Math.abs(a)-Math.abs(b);
});
console.log(arr);

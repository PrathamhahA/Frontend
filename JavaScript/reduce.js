let arr=[1,9,2,7,4,5,6,2,8];
console.log(arr);
let x=arr.reduce(function(a,b){
    return a+b;
});
console.log(x);
let max=arr.reduce(function(a,b){
    return Math.max(a,b);
});

console.log(max);

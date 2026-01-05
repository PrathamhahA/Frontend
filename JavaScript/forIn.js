let x={
    'name':"Ragav",
    "nick name": "Raghu",
    'age':24,
    'percentage':92.5,
    'isMarried':false
};
for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
        console.log(key,x[key]);
        
    }
}
console.log("------------------")
for (const key in x) {
    console.log(key,x[key]);
    
}
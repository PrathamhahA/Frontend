let s="   Raghav Garg   ";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
let s2=s.toUpperCase();
console.log(s,s2);
console.log(s.trim());
console.log(s.trimEnd());
console.log(s.trimStart());
console.log(s.indexOf("R"));
console.log(s.lastIndexOf('a'));
console.log(s.charAt(3));
console.log(s.slice(6))
console.log(s.slice(6,9));
s3="Partah is a student of Techno";
arr=s3.split(" ");
console.log(s3);
console.log(arr);
for (const ele of arr) {
    console.log(ele);
    
}
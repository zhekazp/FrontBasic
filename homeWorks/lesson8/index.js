let a=5;
let b="string";
let c=true;
console.log(a);
console.log(b);
console.log(c);

let a1=5;
let a2=a1;
console.log(a1);
console.log(a2);

let arr=Array(3,5,7,8,5,4,3);
arr.forEach(x=>{
    console.log(x);
});

let arr2=Array(3,5,7,8,5,4,100);

for(let i=arr2.length-1;i>=0;i--){
    console.log(arr2[i]);
}
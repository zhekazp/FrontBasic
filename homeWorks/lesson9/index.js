const arr=[2, 4, 6, 8, 10];
for(let i=0;i<arr.length;i++){
    arr[i]*=2;
}
console.log(arr);

let temp=arr[0];
arr[0]=arr[arr.length-1];
arr[arr.length-1]=temp;

console.log(arr);

const arr2=[2, 4, 6, 5, 8, 10];
let test=false;
for(let i=0;i<arr2.length;i++){
    if(arr2[i] === 5 ){
        test=true;
        console.log("5 is in array");
        break;
    }
}
if(!test){
    console.log("5 is not in array");
}

const arr3=[10, 15, 20, 25, 30];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr3[i];
}

console.log("the average point sit ",sum / arr3.length);



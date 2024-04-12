//Task1

function wichNumberIsBigger(a,b){
    if (a === b){
        console.log("Numbers are equel");
    }else if(a>b){
        console.log("First number is bigger");
    }else{
        console.log("Second number is bigger");
    }
}

wichNumberIsBigger(5,7);
console.log();
console.log("------------------------");
console.log();
//Task2
function mySubstring(string, index){
    if (index > string.length){
        index=string.length;
    }
    result='';
    for(let i=0;i<index;i++){
        result+=string[i];
    }
    return result;
}

console.log(mySubstring("test",2));
console.log(mySubstring("test number 2",7));
console.log(mySubstring("test",7));
console.log();
console.log("------------------------");
console.log();
//Task3
function myContains(arr, el){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === el){
            return true;
        }
    }
    return false;
}

console.log(myContains(['a1','a2','a3'],'a2'));
console.log(myContains(['a1','a2','a3'],5));
console.log();
console.log("------------------------");
console.log();
//Task4

function sort(arr){
let arrLength=arr.length-1;
while(arrLength>0){
    for (let i=0;i<arrLength;i++){
        if(arr[i] > arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    arrLength--;
}    
}

const arr=[7,4,90,45,2,4,67,100];
sort(arr);
console.log(arr.join(', '));

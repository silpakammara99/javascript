
//1. find the sum of the even numbers in an array

let a=[29,10,2,5,20,100,98];
sum=0;
for(i=1;i<=a.length;i++){
    if(a[i]%2==0){
        sum+=a[i];
        
    }
    
}
console.log("the sum of even numbers is: "+sum);

//2.find the largest number in an array and //3. find the smallest number in an array


let arr=[32,3483,4,76,2132,684,73,34,69];
let j, k,largest=arr[0];
let smallest=arr[0];


for(j=1;j<=arr.length;j++){
        if(arr[j]>largest-1){
         largest=arr[j];
        }
        if(arr[j]<smallest){
            // min=smallest;
        }
}
console.log("largest num is:   "+largest);
console.log("smallest num is:   "+smallest);

//3. find the second largest number in an array

let obj=[31.4,635,75,21,757,2342,87857,234534];
let sec;
let first=obj[0];
 let thir;

for(k=1;k<=obj.length;k++){
    if(obj[k]>first){
        sec=first;
        first=obj[k];
      
    }
    else if(obj[k]>sec){
        thir=sec;
        sec=obj[k];
    }
}
console.log(first);
console.log(sec);

//find the odd numbers in an array and push into new array

let arr1=[4245,24,245,65,21,6,3,73];
let ar2=[];
for(z=0;z<=arr1.length-1;z++){
    if(arr1[z]%z==0)
    ar2.push(arr1[z]);
   
}
console.log(ar2);
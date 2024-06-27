// 1. Write a program to find the sum of all even numbers in an array using a for loop.
let ar=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
for(i=0;i<=arr.length;i++){
    if(ar[i]%2==0){
        sum=sum+ar[i];
    }
}
console.log(sum);

// 2.Use a do-while loop to print the numbers from 1 to 10, but only if the number is not equal to 5.

let j=1;
do{
    if(j!==5){
        console.log(j);
    }
    j++
}while(j<=10)

// 3.check whether given input string is palindrome or not in javascript

    let word="likitha"
    let str=""; 
             for(i=word.length-1;i>=0;i--){
            str+=word[i];
        }
        console.log(str);
        if(str==word){
            console.log("it is palindrome");
        }
        else{
            console.log("it is not a palindrome");
        }
       
   
// 4.Write a program using a do-while loop to print the numbers from 10 to 1, but only if the number is odd. If the number is even, print "Skipping even number".
let i=10;
do{
    if(i%2==0){
        console.log("skipping even number");
    }
    else{
        console.log(i);
    }
i--;
}while(i>=0)



// 5. Write a program using a while loop to find the average of all numbers in an array. If the average is greater than 50, print "Average is large".

 let arr=[20,404,30,78,756,31,454,5409];
    let total = 0;
    let count = 0;
    let index = 0;
    
    while (index < arr.length) {
        total += arr[index];
        count++;
        index++;
    }
    if (count > 0) {
        let average = total / count;
        console.log(`Average of the array is:`+average);
        
        if (average > 50) {
            console.log('Average is large');
        }
    }


    // 6. star pattern ? 
     function star(rows){
        for(i=1;i<=rows;i++){
            pattern="";
            for(j=1;j<=i;j++){
             pattern+="*";
            }
            console.log(pattern);
        }
     }
     star(6);

    //or


    let a=5;
var add="";
for(i=0;i<=a;i++){
    add+="*";
   console.log(add);
}
    






    


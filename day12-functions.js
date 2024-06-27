
// 1. Write a JavaScript function that takes two numbers and an operator ('+', '-', '*', '/') as arguments and returns the result of the arithmetic operation.
function arithmetic(a,b){
    console.log("the addition=  "+ (a+b));
    console.log("the subtraction=  "+ (a-b));
    console.log("the multiplication=  "+ (a*b));
    console.log("the division=  "+ (a/b));
}
arithmetic(10,30);

// ans. the addition=  40
// the subtraction=  -20
// the multiplication=  300
// the division=  0.3333333333333333 

// 2. Write a JavaScript function that takes a number as a argument and returns it's square value?
function square(x){
   return z=x*x;
}
console.log("the square of 29 is   "+square(29));
console.log("the square of 15 is   "+square(15));

// ans.the square of 29 is   841
// the square of 15 is   225

// 3. Write a JavaScript function that takes two numbers as a arguments and returns the highest(max ) of the number using terinary operator inside a function

function max(a,b){
    console.log("the maximum value is "+(a>b?a:b));
}
max(30,50)

//ans. the maximum value is 50

// 4) Write a javascript function which takes three arguments  (amount , rate of interest, no of years ) returns the total value of interest

function si(p,t,r){
    let si=p*t*r/100;
    console.log("total simple interest is  "+si);
}
si(1500,2.5,3);

//ans. total simple interest is  112.5
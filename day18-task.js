
// 1. What is the output of:

// var x = 10;
// function foo() {
//   console.log(x);
// }
// foo();

//  Output: 10(the var is declared as global it can be accessed in anywhere in program)

// 2. What is the output of:

// var x = 10;
// function foo() {
//   var x = 20;
//   console.log(x);
// }
// foo();

// Output: 20(bcoz the function variable can get more preference than global variable )

// 3. What is the output of:

// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 20;
// }
// foo();

// Output: undefined(due to the behavior of variable hoisting in JavaScript)

// 4. What is the output of:

// var x = 10;
// function foo() {
//   console.log(x);
// }
// var x = 20;
// foo();

// Output: 20 (here the var x declares 10 globally but after when calling the function before it calls the value of x updated so, o/p is 20)

// 5. What is the output of:

// function foo() {
//   console.log(x);
// }
// var x = 10;
// foo();

// Output:10 (bcoz the variable updates the value x=10 before its call)

// 6. What is the output of:

// function foo() {
//   console.log(x);
// }
// foo();
// var x = 10;

// Output: undefined(here the value of x updated after calling so, x value)







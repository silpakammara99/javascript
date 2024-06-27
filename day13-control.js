// 1. What will be the output of this code:
if (5 > 10) {
    console.log("5 is greater than 10");
} else {
    console.log("5 is not greater than 10");
}

//ans. 5 is not greater than 10.
//reason: the condition is false so its reflects the else block.

//2.What will be the output of this code:

if (NaN === NaN) {
    console.log("nan is equal to nan");
}
else {
    console.log("nan is not equal to nan");
}

//ans. nan is not equal to nan
// reason: bcoz nan is a special value considered not equal to itself so when comparing anything with NAN it shows not equal only.

// 3.What will be the output of this code:

if (!null) {
    console.log('null is truthy');
} else {
    console.log('null is falsy');
}

//ans. null is truthy.
//reason: null is considered false but we use symbol not(!), the interpreter considered !null as true, so it reflects if block.

// 4.What will be the output of this code:
if (0 === '') {
    console.log('0 is equal to empty string');
} else {
    console.log('0 is not equal to empty string');
}

//ans. 0 is not equal to empty string.
//reason: here 0 and empty string('') are both different types so condition false, it prints else block.

// 5.What will be the output of this code:
if (true && false) {
    console.log('true and false is true');
} else {
    console.log('true and false is false');
}

//ans. true and false is false
//reason: as per logical AND operator(&&) if one condition is false the output is false, so if condition is false so it prints else block.

// 6.What will be the output of this code:

if (false || true) {
    console.log('false or true is true');
} else {
    console.log('false or true is false');
}

//ans.false or true is true.
//reason: as per logical Or if either of condition is true then o/p is true, so if condition is true.

// 7.What will be the output of this code:
if (!false && true) {
    console.log('not false and true is true');
} else {
    console.log('not false and true is false');
}

//ans. not false and true is true.
//reason: here !false considered as true, so true &&true is true. it prints if block.

// 8.What will be the output of this code:
if (5 === '5') {
    console.log('5 is equal to string 5');
} else {
    console.log('5 is not equal to string 5');
}

//ans. 5 is not equal to string 5 
// reason: === strict equal to compares to values and type, both number and string in not equal so it prints else block. 

// 9.What will be the output of this code:
if (undefined == null) {
    console.log('undefined is equal to null');
} else {
    console.log('undefined is not equal to null');
}

//ans. undefined is equal to null.
//reason: loosely == compares the values as per that undefined and null are falsy values it prints if block.

// 10.What will be the output of this code:
if (typeof [] === 'object') {
    console.log('Array is an object');
} else {
    console.log('Array is not an object');
}

//ans. array is an object.
//reason: here typeof [] is object that considered as string itself so string object==='object' is true, so it prints if block statement.



//FOR loops questions

// 1.What will be the output of this code:
// for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }

// ans. 0,1,2,3,4 
// reason: for loop executes initialization after checks condition if condition satisfies goes to block to code and goes to iteration statement and continues.
// once the condition satisfies it goes out of block.

//2. What will be the output of this code:
// for (var i = 0; i < 5; i += 2) {
//     console.log(i);
//   }
//ans. 0, 2,4 
// reason: here iteration i=i+2 given so prints even and in condition i<5 if only i value is below 5 then prints and if i becomes equal to greater it stops and goes to outof block.

// 3. What will be the output of this code:
// for (var i = 5; i>= 0; i--) {
//     console.log(i);
//   }
// ans. 5, 4, 3, 2, 1, 0 
// reason: HEre in iteration used decrement operator, at first initialise 5 in i and checks condition if condition true goes to inside block and prints output and again goes to iteration i decrements to 4 and checks condition satisfies, likewise it contines until i becomes to 0.

// 4. What will be the output of this code:
//   for (var i = 0; i < 5; i += 3) {
//     console.log(i);
//   }
//ans. 0 , 3
// reason: i=i+3, first 0 will print again i becomes 3 and satisfies the condition prints 3 after i becomes to 6 condition false stops the printing.

// 5.What will be the output of this code:
// for (var i = 0; i > 5; i++) {
//     console.log(i);
//   }
// ans. nothing will prints
// reason: here initialisation i= 0 the conditon 0>5 is not correct so goes to outof block.

// 6. What will be the output of this code:
// for (var i = 5; i <= 0; i--) {
//   console.log(i);
// }
// ans. nothing will prints
// reason: here initialisation i= 5 the conditon 5<=0 is not correct so goes to outof block.

// 7.What will be the output of this code:
// for (var i = 0; i < 10; i += 4) {
//     console.log(i);
//   }
//ans. 0, 4, 8.

//8.What will be the output of this code:
for (var i = 0; i < 5; i++) {
    if (i === 3) {
        console.log(i);
        break;
    }

}
// ans. 3

//9.What will be the output of this code:
for (var i = 0; i < 5; i++) {
    if (i === 2) {
        console.log(i);
        continue;
    }
}

//10.What will be the output of this code:
for (var i = 0; i < 5; i++) {
    if (i === 4)
        return;
        console.log(i);
  }











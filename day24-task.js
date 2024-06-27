
// Using concat()
//Objective: Merge two arrays into one.


const array1 = [1, 2, 3];
const array2 = [4, 5, 6]; // [1, 2, 3, 4, 5, 6]

console.log(array1.concat(array2));

//o/p:- [1,2,3,4,5,6]

// Using flat()
//Objective: Flatten a nested array up to a specific depth.

const nestedArray = [1, [2, [3, [4]]]]; // [1, 2, 3, [4]]
 console.log(nestedArray.flat(2));

//o/p:- [ 1, 2, 3, [ 4 ] ]

// Using splice()
// Objective: Remove elements from an array and optionally insert new elements.

const arrayb = [1, 2, 3, 4, 5]; // [1, 2, 'a', 'b', 5]
let remove=arrayb.splice(2, 2, "a", "b");
console.log(arrayb);
console.log(remove);

//o/p:- [1,2 ,"a", "b", 5] and [3,4]


//  Using slice()
// Objective: Extract a portion of an array into a new array.

const array3 = [1, 2, 3, 4, 5]; // [2, 3, 4]
console.log(array3.slice(1,4));

// o/p:=[ 2, 3, 4 ]

// Using toSpliced()
// Objective: Create a new array with some elements replaced, without modifying the original array


const array4 = [1, 2, 3, 4, 5];// [1, 'a', 'b', 4, 5]
let replace=array4.toSpliced(2,0,"a","c");
console.log(replace);
console.log(array4); // [1, 2, 3, 4, 5]

//o/p:-[1, 2, 'a', 'c',3, 4, 5] and [ 1, 2, 3, 4, 5 ]

// Using copyWithin()
// Objective: Copy part of an array to another location in the same array.

const array5 = [1, 2, 3, 4, 5,6,7];
let k=array5.copyWithin(1, 3, 6); // [4, 5, 3, 4, 5]
console.log(k);

//o.p:-[
//   1, 4, 5, 6,
//   5, 6, 7
// ]


// Using indexOf()
// Objective: Find the first occurrence of a value in an array.

const array6 = [1, 2, 3, 2, 1];
const index = array6.indexOf(3); // 1
console.log(index);

//o/p:- 2(it returs the index value of an element)

//Using lastIndexOf()
// Objective: Find the last occurrence of a value in an array.


const array7 = [1, 2, 3, 2, 1];
const lastIndex = array7.lastIndexOf(2);
console.log(lastIndex); 

//0/p:- 3(here the last element 2 is located in index place 3 so it returns 3) 

//Using includes()
// Objective: Check if an array contains a certain value.

const array8 = [1, 2, 3, 4, 5];
const hasValue = array8.includes(8); // true
console.log(hasValue);

//O/p:- it returns false( bcoz of the element 8 is not present in the array)

// Combining Methods
// Objective: Use multiple array methods in a single task.

const array9 = [1, 2, 3];
const arraya = [4, 5, 6];
const mergedArray = array9.concat(arraya).flat();
const splicedArray = mergedArray.toSpliced(2, 1, 'a');
const finalArray = splicedArray.slice(1, 5);
console.log(finalArray.includes('a')); // true
console.log(finalArray.indexOf(2)); // 3
console.log(splicedArray);

//o.p:- first prints true(the new array has value a) and second statement prints 0(it starts index with -1) and splicedArray prints [1,2,'a', 4,5,6]
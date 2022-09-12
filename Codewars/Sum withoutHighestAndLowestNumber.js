// Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// function sumArray(array) {
//   if (array == null || array.length <= 2) {
//     return 0;
//   }
//   let sum = 0;
//   let sorted = array.sort((a, b) => a - b);
//   // console.log(sorted)
//   for (let i = 1; i < sorted.length - 1; i++) {
//     // console.log(i)
//     sum += sorted[i];
//   }
//   return sum === null ? 0 : sum;
// }

// function sumArray(array) {
//   if (array == [] || array == null) {
//     return 0;
//   }
//     let result = 0;
//   let sorted = array.sort((a,b)=>a-b);
//     console.log(sorted);
//   sorted.pop();
//   sorted.shift();
//   console.log(sorted)
//   for (let ele of array) {
//     result += ele;
//   }
//   return result;
// }

console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);

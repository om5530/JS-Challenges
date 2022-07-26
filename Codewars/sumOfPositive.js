// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let sum = 0;
  let NaturalNumbers = arr.filter((item) => item > 0)
  NaturalNumbers.map((item) => sum += item)
  return sum
}


function positiveSum(arr) {
  let sum = 0;
  arr.map((item) => (item > 0) ? sum += item : 0)   //forEach can also be used
  return sum
}


//using reduce
function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
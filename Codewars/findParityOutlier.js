

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let even = []
  let odd = []
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
  }
  if (even.length > odd.length) {
    return Number(odd.join(''))
  } else {
    return Number(even.join(''))
  }
}


//clever
function findOutlier(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([2, 6, 8, 10, 3]))
console.log(findOutlier([0, 0, 3, 0, 0]))
console.log(findOutlier([1, 1, 0, 1, 1]))
console.log(findOutlier([1]))




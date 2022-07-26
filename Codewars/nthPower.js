// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
  if(n > array.length-1) return -1
      for(i=0; i < array.length; i++){
      if(n == i){
        return Math.pow(array[i], n);
      }
    }
  }

   //my final ans
  function index(array, n){
    if(n > array.length-1) return -1
    return Math.pow(array[n],n)
    }


console.log(index([1, 2, 3, 4],4),9);
// console.log(index([1, 3, 10, 100],3),1000000);
// console.log(index([1, 2],3),-1);
// console.log(index([1,1,1,1,1,1,1,1,1,1], 9),1);
// console.log(index([1,1,1,1,1,1,1,1,1,2], 9),512);
// console.log(index([29,82,45,10], 3),1000);
// console.log(index([6,31], 3),-1);
// console.log(index([75,68,35,61,9,36,89,0,30], 10),-1);
// console.log(index([3,10,1],3))
// console.log(index([1,8,1,1,2],5))
// console.log(index([7,6,8,3,9],3))
// console.log(index([9,1,8,8] ,4))

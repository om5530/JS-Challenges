// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
  let zeroArr = []
  let filteredArr = arr.filter((item) => item !== 0)
  // console.log(filteredArr)
  // let descendingOrder = arr.sort((a, b) => b - a)
  // console.log(descendingOrder)
  arr.map((ele) => {
    if (ele === 0) return zeroArr.push(ele)
  })
  return [...filteredArr,...zeroArr]
}


//clever
// var moveZeros = function (arr) {
//   var filtedList = arr.filter(function (num){return num !== 0;});
//   var zeroList = arr.filter(function (num){return num === 0;});
//   return filtedList.concat(zeroList);
// }


// function moveZeros(arr) {
//   let zero =[];
//   let other=[];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//           zero.push(arr[i])
//       }else{
//           other.push(arr[i])
//       }

//   }
// return [...other,...zero]
// }

let result = moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])
console.log(result);

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// result  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))



function moveZeros(arr) {
  let zeroArr = []
  let filteredArr = arr.filter((item) => item !== 0)
  arr.map((ele) => {
    if (ele === 0) return zeroArr.push(ele)
  })
  return [...filteredArr,...zeroArr]
}


var i = 0, j = 0;

console.log(++i);  
console.log(j++); 
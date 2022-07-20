//return number with most repeats
//if two number the repeated the same return first
//if none repeated return -1

function testRepeat(arr){
  let tempNumbers = arr.reduce((acc,curr,index)=>{
    console.log(acc)
    acc[curr] = acc[curr] + 1 || 1
    console.log(acc)
     return acc
  },{})
  return tempNumbers
}

console.log(testRepeat([5,2,2]))
//return 5
// console.log(testRepeat([6,5,5,10,10,10]))
// return 10
// console.log(testRepeat([3,4,1,6,10]))
// return -1


function minMax(arr) {
  // arr.sort((a,b)=> a-b)
  console.log(Math.min(...arr))
  console.log(Math.max(...arr))

  return [arr[0], arr[arr.length - 1]];
}


function minMax(arr) {
  let min = (Math.min(...arr))
  let max = (Math.max(...arr))

  return [min,max];
}

//clever
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([2, 1, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([ 5]))


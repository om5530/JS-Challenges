//In this  kata you will create a function that takes a list of no-negative intergers and strings and returns a new list with the strings filtered out.

function filter_list(numArr) {
  return numArr.filter(callBackFunc)
}

function callBackFunc(arrItem) {
  //1.it is a number    //it is positive 
  if (arrItem >= 0 && typeof arrItem === 'number') {
    return true
  } else {
    return false
  }
}
console.log(filter_list([1, 2, 3, 4, 5, 6, '2', '3', '1', -1, -4]))


//refactoring #1
function filter_list(numArr) {
  return numArr.filter((arrItem)=> arrItem >= 0 && typeof arrItem === 'number')
}
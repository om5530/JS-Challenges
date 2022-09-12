// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.




// function replaceDots(str){
//   return str.split('.').join('-')
// }

// function replaceDots(str){
//   result = '';
//   for(let ele of str){
//      result +=  ele.replace('.','-')
//     console.log(result)
// }


// var replaceDots = function(str) {
//   return str.split('.').join('-')
// }

var replaceDots = function(str) {
  return str.replaceAll('.', '-')
}

console.log(replaceDots('one.two.three'));
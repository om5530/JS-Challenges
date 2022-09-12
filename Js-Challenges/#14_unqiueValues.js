//return true only if all values are unique, otherwise false
//using Array, object, string method lasIndexOf()
//no Set Data Structure


//with array
function unique(str) {
  let values = [];
  for (let letter of str) {
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    console.log(values.indexOf(letter))
    values = [...values, letter]  //values.push(letter) this is same
  }
  return true
}


//with object 
// function unique(str) {
//   let values = {};
//   for (let letter of str) {
//     if (values[letter]) {
//       return false
//     }
//     values[letter] = "exists";
//   }
//   return true
// }


function unique(str) {
  for (let i = 0; i < str.length; i++) {
    if(str.lastIndexOf(str[i] !== i)){
      return false
    }
    console.log(str.lastIndexOf(str[i]))

  }
  return true
}



console.log(unique("abcde")) // true
console.log(unique("abcdesd")) //false
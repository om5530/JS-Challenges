// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"



//using for loop
function spinWords(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split('').reverse().join('');
      console.log(strArr[i])
  }
  return strArr.join(' ');
}

//using map
// function spinWords(str) {
//   return str.split(' ').map((word) => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');
// }

console.log((spinWords("Welcome")))
console.log(spinWords("Hey fellow warriors"))





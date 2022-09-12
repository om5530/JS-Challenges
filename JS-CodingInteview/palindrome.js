// find palindromes
// palindrome('abba') === true
// palindrome('abcdrfg') === false




// solution 1
// reverse the string 
// check with original if they are same

function palindrome(str){
  let reversed = str.split('').reverse().join('')
  return reversed === str
}
console.log(palindrome('abba'))
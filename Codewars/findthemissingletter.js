function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}
console.log(findMissingLetter(['a','b','c','d','f']))




function findMissingLetter(array) {
  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const isUpperCase = array[0] === array[0].toUpperCase();

  let alphaIndex = alphabet.indexOf(array[0].toLowerCase());
  
  let letterPos;

  array.forEach(el => {
    if(el.toLowerCase() !== alphabet[alphaIndex]) {
      letterPos = alphaIndex;
    } else {
      alphaIndex++;
    }
  });
    
  return isUpperCase ? alphabet[letterPos].toUpperCase() : alphabet[letterPos];
}
function longestWord(str){
  let words = str.split(" ")
  let longestWord = '';

  //using for of method
  // for(let word of words){
  //   if(word.length > longestWord.length){
  //    longestWord = word;
  //   }
  // }


  words.map((item)=>{//using map method
    if(item.length > longestWord.length){
      longestWord = item
    }
  })
  return longestWord
}


console.log(longestWord("I woke up early today"))
console.log(longestWord("I went straight to the beach"))
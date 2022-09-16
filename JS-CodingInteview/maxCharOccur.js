// 32eddseew3
// #he3#33ll#l#o

//find the character that appears the most and total number of time it appears

const maxChar  = (str) =>{
  let obj = {};

  for(let char of str){
    //  console.log(char)
     (!obj[char]) ? obj[char] = 1 : obj[char]++

  }
  console.log(obj)
  let maxNum = 0;
  let maximumChar = '';

  for(let char in obj){
    console.log(char)
    console.log(obj[char])
    if(obj[char] >= maxNum){
    maxNum = obj[char]
    maximumChar = char
  }
}
  return `${maximumChar} appears ${maxNum} times`
}

console.log(maxChar('heLLLoo$$3pL'))

const maxCharMap = (str) =>{
  let  map = new Map()


}

console.log(maxCharMap)
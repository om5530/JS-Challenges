//string will not contain numbers or symbols only letters.
function countletters(str){
  let tempArr = str.split('')
 let letters = []
 let count = 1

 for(let i = 0; i<tempArr.length ; i++){
  if(tempArr[i] === tempArr[i+1]){
    count++
  }else{
    let value = `${count}${tempArr[i]}`
    letters = [...letters,value]
    count = 1
  }
 }
 return letters.join('')
}
console.log(countletters('feeerrtttooooorroo'))
//3f5e6r8t
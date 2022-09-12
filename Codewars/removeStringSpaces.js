// function noSpace(str){
//   return  str.replace(/ /g, "")
// }  

// function noSpace(str){
// return str.split(' ').join('')

// }

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
// console.log((noSpace('8aaaaa dddd r     ')))



function noSpace(Str){
  var result = ""
  // for(var i = 0; i < Str.length; i++){
  //   if(Str[i] !== " "){
  //     result += Str[i];
  //   }
  // }
  for(let ele of Str){
    if (ele !== ' ') {
      result += ele;
    }
  }
  return result;
}
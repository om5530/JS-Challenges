function noSpace(str){
  return  str.replace(/ /g, "")
}    

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
console.log((noSpace('8aaaaa dddd r     ')))


function noSpace(x){return x.split(' ').join('')}



function noSpace(x){
  var result = ""
  for(var index = 0; index < x.length; index++){
    if(x[index] !== " "){
      result += x[index];
    }
  }
  return result;
}
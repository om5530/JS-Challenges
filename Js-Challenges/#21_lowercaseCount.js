function lowerCount(str){
//How many?
 let lowerCount = str.match(/[a-z]/g)
  return lowerCount ? lowerCount.length : 0
}

console.log(lowerCount('asdfSADFM12331!'))
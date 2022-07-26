// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

function isOpposite(s1,s2){
  //coding here...
  if (s1.length !== s2.length || s1.length === 0) {
      return false
  }
      
  for (let i = 0; i < s1.length; i++){
    if (s1[i] === s2[i])
      return false
  }
  
  return true
  
}

// function isOpposite(s1,s2){
//   let s1 =  s1.split(' ').filter((item)=> item) 
//   console.log(s1)
//   s2.split(' ').map((item)=> item)
//   console.log(s2)
//  }


console.log(isOpposite("ab","AB") , true);
console.log(isOpposite("aB","Ab") , true);
console.log(isOpposite("aBcd","AbCD") , true);
console.log(isOpposite("aBcde","AbCD") , false);
console.log(isOpposite("AB","Ab") , false);
console.log(isOpposite("","") , false);
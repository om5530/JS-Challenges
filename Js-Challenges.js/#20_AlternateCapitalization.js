//Given a string capitalize the letters that occuy even indexs and odd indexes separately , and return as shown below .Index 0 will
// be considered even.

function capitalize(s) {
  const arr1 = s.split('');
  const arr2 = s.split('');
  console.log(arr1)

  //Even capitalization
  arr1.forEach((item, index, oriArr) => {
    if (index % 2 === 0) {
      oriArr[index] = item.toUpperCase();
    }
  })
  console.log(arr1)

  //odd capitalization
  arr2.forEach((item, index, oriArr) => {
    if (index % 2 !== 0) {
      oriArr[index] = item.toUpperCase();
    }
  })

  const arr1Str = arr1.join("");
  const arr2Str = arr2.join("");

  return  [arr1Str , arr2Str]
}



console.log(capitalize("abcdef"))

// result should be like // ['AbCdEf', 'aBcDeF']

//anything modulus by 2 is return us even everything else is odd
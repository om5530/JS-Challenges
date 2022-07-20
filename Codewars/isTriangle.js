function isTriangle(a, b, c) {

  let tempArr = [a, b, c].sort((a, b) => a - b)
  console.log(tempArr)

  if ((tempArr[0] || tempArr[0] || tempArr[0]) == 0) {
    return false
  }
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] <= 0) {
      return false
    }
  }
  if (a + b > c && a + c > b && b + c > a) {
    return true
  }

  return false;
}


//optimised
function isTriangle(a, b, c) {

  if (a + b > c && a + c > b && b + c > a) {
    return true
  }
  if (a || b || c <= 0) {
    return false
  }

  return false;
}
console.log(isTriangle(1, 2, 2))
console.log(isTriangle(7, 2, 2))
console.log(isTriangle(1, 2, 3))
console.log(isTriangle(1, 3, 4))
//Mehtod 1 

//prime number = can only divide evenly by itself or one 
//11/2 = 5.5
// function isPrime(num) {
//   if (num < 2) {
//     return false
//   }
//   //modulus operator % (It will give reminder)
//   // console.log(11 % 2)
//   for (let i = 2; i < num; i++) {
//     console.log(i)
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true
// }


//Method 2
// function isPrime(num) {
//   if (num < 2) {
//     return false
//   }
//   let root = Math.ceil(Math.sqrt(num))
//   console.log(root)
//   for (let i = 2; i <= root; i++) {
//     console.log(i)
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return true

// }


//clever
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


console.log(isPrime(2))
false
//  console.log(isPrime(11))
//  true
//  console.log(isPrime(121))
//  false
//  console.log(isPrime(127))
//  true





// There is a large pile of socks that must be paired by color . Given an array of integers representing the color of
// each sock , determine how many pairs of socks with matching colors there are .
// Example
// n = 7
// ar = [ 1 , 2 , 1 , 2 , 1 , 3 , 2 ]
// There is one pair of color 1 and one of color 2. There are three odd socks left , one of each color . The number
// of pairs is 2 .
// Function Description
// Complete the sockMerchant function in the editor below .
// sockMerchant has the following parameter ( s ) :
// • int n : the number of socks in the pile
// • int ar [ n ] : the colors of each sock
// Returns
// • int : the number of pairs
// Input Format
// The first line contains an integer n , the number of socks represented in ar .
// The second line contains n space - separated integers , ar [ i ] , the colors of the socks in the pile .
// Constraints
// • 1 ≤ n ≤ 100
// • 1 ≤ ar [ i ] ≤ 100 where 0 < i < n
// Sample Input
//   STDIN Function
//                             n = 9
//   10 20 20 10 10 30 50 10 20 ar = [ 10 , 20 , 20 , 10 , 10 , 30 , 50 , 10 , 20 ]
// Sample Output 3

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  let res = [];
  console.log(n, ar);
  let map = new Map();
  for (let ele of ar) {
    if (map.has(ele)) {
      map.set(ele, map.get(ele) + 1);
    } else {
      map.set(ele, 1);
    }
  }

  for (let ele of map) {
    console.log(ele);
    if (ele[1] % 2 !== 0) {
      res.push(ele[1] - 1);
    }else{
      res.push(ele[1])
    }
  }
 console.log(res)
 let sum = 0
   res.map((ele)=>{
  sum += ele
   })
  return sum/2
}

console.log(sockMerchant(9, arr));

//  console.log([...map.entries()])
//  [...map.entries()].map((ele)=>{
//    if(ele[1] % 2 !== 0)  return res.push(ele[1])
// })
// console.log(res)


// function hash(num){
//      console.log(num)
//        let str = '#'
//     for(let i =1 ; i<=num; i++){
//          console.log(str)
//     }
//   }



  
function hash(n) {
  // want to declare a variable that will hold the final output that we will print
  let output = '';

  // outer for loop to keep track of the overall number of rows (n)
  for (let i = 1; i <= n; i++) {
    // inner for loop to keep track of the preceding spaces on each line
    // s should start out at n-1 which we can see from the pic I drew
    // s should be greater than or equal to i because the number of spaces decreases as i increases
    // decrease s bc the number of spaces decreases as i increases
    for (let s = n - 1; s >= i; s--) {
      output += ' ';
    }

    // inner for loop to keep track of the #s on each line
    // h should start at one because the first line will always have one #
    // h should be less than or equal to the row that we are on since h will approach and eventually equal n
    // h increases since we increment h to equal i which will eventually equal n
    for (let h = 1; h <= i; h++) {
      output += '#';
    }
    // new line
    output += '\n';
  }
  // log the final result
  console.log(output);
}
console.log(hash(6))
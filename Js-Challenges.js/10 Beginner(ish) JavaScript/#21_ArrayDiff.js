//your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a,which are present in list b.

// arrayDiff([1,2]) == [2]

function arrayDiff(a, b) {
  if (a.length === 0) {
    return b;
  }
  if (b.length === 0) {
    return a;
  }

  let newA = a
  let newB = b
 
const result =  a.forEach((arrItem, arrIndex) => {
  const aCopy = newA.slice();
  const bCopy = newB.slice()
  //we have found this ele in both arrays
     if(b.includes[arrItem]){
      const newA = aCopy.filter(item => item !== arrItem)
      const newB = bCopy.filter(item => item !== arrIndex)
     }
  })
  return newA;
}

arrayDiff([1,2,3,3],[1,1,2,3,4,5,6,9])
console.log(arrayDiff([1,2,3],[1,1,2,3,3,4,5,6,9]))

//question is not complete
let arr = [4, 5, 3, 7, 2];


function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function quickSort(arr) {
  // function partition(arr, left, right) {
  //   let i = left;
  //   let j = right;
  //   let pivot = arr[Math.floor((left + right) / 2)];
  //   while (i <= j) {
  //     while (arr[i] < pivot) {
  //       i++;
  //     }
  //     while (arr[j] > pivot) {
  //       j--;
  //     }
  //     if (i <= j) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]];
  //       i++;
  //       j--;
  //     }
  //   }
  //   return i;
  // }

  function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (array[i] < array[pivotIndex]) {
        swapIndex++;
        swap(array, swapIndex, i);
      }
    }
    swap(array, pivotIndex, swapIndex);
    return arr;
  }
  return pivot(arr, 0, arr.length - 1);
}

console.log(quickSort([4, 5, 3, 7, 2]))

let arrr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]


let sum = 0
arrr.map((ele)=>{
  sum += ele
})

console.log(sum)
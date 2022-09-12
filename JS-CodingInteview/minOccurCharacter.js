// 'sssssdddddkkkkahhdbhbjdndkdskvhkudfb';
let str1 = 'sssssdddddkkkkahhdbhbjdndkdskvhkudfb';

function minOcuurChar(str) {
  // first we will store all ele in hash map
  let map = new Map();
  for (let el of str) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  }
  console.log(map);
  let minOccur = Math.min();
  let leastChar = '';

  for (let i of map) {
    if (minOccur > i[1]) {
      minOccur = i[1];
      leastChar = i[0];
    }
  }
  return leastChar + ' ' + minOccur;
}

console.log(minOcuurChar(str1));

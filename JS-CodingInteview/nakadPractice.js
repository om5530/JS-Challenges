// let list1 = [1, 2, 3, 4, 5];
// let list2 = [2, 3, 4, 6, 7]

// output = [2,3,4]

// function compare(arr1, arr2) {
    // if (arr1.length !== arr2.length) return false;

//     let map = new Map();
    // let map2 = new Map();
//     const result = []
//     for (let el of arr1) {
//         if (map.has(el)) {
//             map.set(el, map.get(el) + 1);
//         } else {
//             map.set(el, 1)
//         }
//     }

//     for (let el of arr2) {
//         if (map.has(el)) {
//             map.set(el, map.get(el) + 1);
//         } else {
//             map.set(el, 1)
//         }
//     }

//     for (let el of map) {
//         console.log(el[1]);
//         if (el[1] > 1) {
//             result.push(el[0])
//         }
//     }
//     return result
// }
// console.log(compare(list1, list2));

let list1 = [{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }, { a: 4, b: 4 }, { a: 5, b: 5 }]
let list2 = [{ a: 6, b: 6 }, { a: 3, b: 2 }, { a: 10, b: 3 }, { a: 7, b: 7 }]

function compare(list1, list2) {
    let map = new Map();
    let map2 = new Map();
    // for list1
    for (el of list1) {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1);
        } else {
            map.set(el, 1)
        }
    }
    console.log(map);

    // for list 2
    for (el of list2) {
        if (map2.has(el)) {
            map2.set(el, map2.get(el) + 1);
        } else {
            map2.set(el, 1)
        }
    }
    console.log(map2);

    // for (let i = 0; i < list1.length; i++) {

    // }
    for (el of map) {
        // if(el[0].a === map2[el].a)
        console.log(el[0].a);

    }

}

console.log(compare(list1, list2));

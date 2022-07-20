// Given :an array cnotaining hashes of names

//Return : a string formatted as a list of names separated by commas for the last names, which should be separated by an ampersand

function List(names) {
  if (names.length === 0) {
    return '';
  }
  if(names.length ===1){
    return names[0].name
  }

  let finalString = '';
  names.forEach((ele, index) => {
    const name = ele.name
  
    if (index === names.length - 1) {
      finalString = finalString + ' & ' + name
    } else if (index === names.length - 2) {
      finalString = finalString + name
    }else{
      finalString = finalString + name + ', '
    }
  });
  console.log(finalString)
  return finalString;
}

List([{ name: 'bart' }, { name: 'lisa' }, { name: 'maggi' }]) 


//clever
function lists(names){
  let xs = names.map(p => p.name)
  let x = xs.pop()
  console.log(xs)
  return xs.length ? xs.join(', ') + " & " + x : x || ""
}


console.log(lists([{ name: 'bart' }, { name: 'lisa' }, { name: 'maggi' }])) 

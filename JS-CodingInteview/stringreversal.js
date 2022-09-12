  //given a sting
  //reverse it
  //reverse('apple') === 'elppa'
  //reverse('Greeting!')='!gniteerG'

  // solution 2
  // given string - create empty string
  // loop through each Character
  // return the reversed
  (function (str) {
    let reversed = '';
    for (let character of str) {
      reversed = character + reversed;
    }
    console.log(reversed);
  }
)('Greeting! omkar');

// solution 1
// given string - convert it into Array
// reverse it the Array
// turn the array back into string

function reverse(str) {
  let reversed = str.split('').reverse().join('');
  console.log(reversed);
  return reversed;
}

reverse('apple omkar ');






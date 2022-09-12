// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (str.trim().length === 0 || str.replace(/ /g, '').length >= 140)
    return false;
  let words = str
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
  return `${'#'}${words}`;
}

function generateHashtag(str) {
  if (str == '' || str.trim() == 0 || str.length >= 140) {
    return false;
  }
  let capital = '';
  str.split(' ').map((ele) => {
    capital += ele.slice(0, 1).toUpperCase().concat(ele.slice(1, ele.length));
  });
  return `#${capital}`;
}

console.log(generateHashtag(""))
console.log(generateHashtag(" ".repeat(200)))
console.log(generateHashtag('Do We have A Hashtag'));
console.log(generateHashtag("code wars"))
console.log(generateHashtag("Codewars Is Nice"))
console.log(generateHashtag("Codewars is nice"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)))

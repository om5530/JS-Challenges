
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
function domainName(url) {
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.');
};


console.log(domainName("http://github.com/carbonfive/raygun"))
function sumStrings(a, b) {
  let sumInNumber =  BigInt(Number(a) + (Number(b)))
 return  sumInNumber.toString()
}

console.log(sumStrings('123', '456'))
console.log(sumStrings('71256931266435732869515139', '8100824045303269669937'))
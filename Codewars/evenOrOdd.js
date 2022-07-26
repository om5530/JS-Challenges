// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function even_or_odd(number) {
  console.log(number % 2)
  return (number % 2 === 0) ? 'Even' :'Odd'
}


console.log(even_or_odd(2), "Even");
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]

//Using one single line of code, complete the following tasks: 
//Sort the numbers in descending order(10, 9, 8, 7, etc).

console.log(integers.sort((a, b) => b - a))


// Remove any integers greater than 19.

console.log(integers.filter(integer => integer < 19 ))

// Multiply each remaining number by 1.5 and then subtract 1.

console.log(integers.map((integer) => (integer * 1.5) - 1))

// Then output(either in the DOM or the console) the sum of all the resulting numbers.

console.log(integers.reduce((currentTotal, next) => currentTotal + next))




console.log(integers.sort((a, b) => b - a).filter(integer => integer < 19 ).map((integer) =>(integer * 1.5) - 1).reduce((currenTotal, next) => currenTotal + next))
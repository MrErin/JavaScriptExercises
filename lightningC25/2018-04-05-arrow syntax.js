/*1. Create a function that logs the result of adding two numbers that were passed in as arguments.
2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
3. Invoke each function a couple times with different argument values.
*/

// function plus (a, b) {
//     console.log(a + " + " + b + " = " + (a + b));
// }

//arrow notation
const add = (a, b) => console.log(a + ' + ' + b + ' = ' + (a + b))

// function subtractStuff (a, b) {
//     console.log(a + " - " + b + " = " + (a - b));
// }

//arrow notation
const difference = (a, b) => console.log(a + ' - ' + b + ' = ' + (a - b))


// plus(3,5);
// plus(10,1);
// plus(6,3);
// subtractStuff(5,0);

// add(1,2);
// add(4843,23)
// difference(23552,1)

//Create another function called `calculate` that takes three arguments: two numbers and a function

const calculate = (a, b, x) => {
	x(a,b)
}

calculate(100, 100, difference)
calculate(100, 100, add)
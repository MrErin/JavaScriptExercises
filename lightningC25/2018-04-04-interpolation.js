/* Challenge 1: Create a function called 'go' that takes 2 arguments: 
direction (forwards, backwards, etc.) and speed (mph). 
The function, when invoked, will print out the following in your console (for example): "The car is moving forward, at 25 mph."
 Challenge 2: Instead of the function printing to the console, print to the DOM 
*/

function go(direction, speed) {
	console.log('The car is moving ' + direction + ' at ' + speed + ' mph.')
}
go('east', 255)

//another option: interpolation

const go2 = (direction, mph) => {
	console.log(`The car is moving ${direction} at ${mph} mph`)
}
go2('forward', 35)
const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]
let locDisplay = 0



for (let k = 0; k < locations.length; k++) {
	if (locations[k][0] > 2) {
		console.log('This location is invalid')
	} else {
		locDisplay++
	}
	// console.log(locations[k][0])


}

console.log('There were ' + locDisplay + ' locations displayed')
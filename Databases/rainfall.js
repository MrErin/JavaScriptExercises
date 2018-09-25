// const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
// const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
// const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
// const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
// const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

// const RainfallDatabase = [_1948, _1949, _1950, _1951, _1952]

// // Find out how much total rain has fallen during the given time for which we have data
const allRainfall = RainfallDatabase.reduce(
	//lambda that concatenates all data from the yearly arrays into a single array
	function (currentSet, nextSet) {
		return currentSet.concat(nextSet)
	}
	//function that adds together all of the data in the newly created array
).reduce(
	function (total, monthlyRainfall) {
		return total + monthlyRainfall
	}
)

console.log(allRainfall)

// Copy this entire code example into a Quokka project
const RainfallDatabase = {
	'1948': [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
	'1949': [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
	'1950': [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
	'1951': [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
	'1952': [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
}

/*
  Don't worry about understanding this code, it is here for
  display purposes only. That said, taking time to *try* to
  understand this code would be encouraged. Talk to the staff.
*/
// yearlyRainData = [].concat
// 	.apply([], Object.values(RainfallDatabase))
// 	.reduce((sum, monthlyRainfall) => sum + monthlyRainfall)

console.log(RainfallDatabase['1951'].reduce((a,b) => (a+b)))
// console.log(yearlyRainData)

const monthsGreaterThan6 = RainfallDatabase["1949"].filter(
    rainfall => rainfall >= 6.0
    // {
    //     if (rainfall >= 6.0) {
    //         return true
    //     }
    // }
)

console.log(monthsGreaterThan6)

const avgRainfall = RainfallDatabase["1950"].reduce(
    (total, thisMonth) => total + thisMonth
) / RainfallDatabase["1950"].length

console.log(parseFloat(avgRainfall.toFixed(2)))

localStorage.setItem("rainfall", JSON.stringify(RainfallDatabase))

const RainfallDatabase = JSON.parse(localStorage.getItem("rainfall"))
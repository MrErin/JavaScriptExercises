//which model was the most popular?

let modelPopularity = {}

dealershipDB.forEach(sale => {
	if (!(sale.vehicle.model in modelPopularity)) {
		modelPopularity[sale.vehicle.model] = 1
	} else {
		modelPopularity[sale.vehicle.model] += 1
	}
})

let sortedPopularity = []

for (let model in modelPopularity) {
	sortedPopularity.push([model, modelPopularity[model]])    
}
sortedPopularity.sort(function (a, b) {
	return a[1] - b[1]
})

console.log(`${sortedPopularity.pop()} is the most popular model.`)
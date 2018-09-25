//which salesperson sold the most cars?

const salespersonSales = {}

dealershipDB.forEach(sale => {
	if (!(sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name in salespersonSales)) {
		salespersonSales[sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name] = 1
	} else {
		salespersonSales[sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name] += 1
	}
})

let sortedSalesPeople = []

for (let person in salespersonSales) {
	sortedSalesPeople.push([person, salespersonSales[person]])
}
sortedSalesPeople.sort(function (a, b) {
	return a[1] - b[1]
})

console.log(`${sortedSalesPeople.pop()} made the most sales.`)
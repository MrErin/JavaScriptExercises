//which salesperson made the most profit?

const salespersonProfit = {}

dealershipDB.forEach(sale => {
	if (!(sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name in salespersonProfit)) {
		salespersonProfit[sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name] = sale.gross_profit
	} else {
		salespersonProfit[sale.sales_agent.first_name + ' ' + sale.sales_agent.last_name] += sale.gross_profit
	}
})

let sortedSalespersonProfit = []

for (let person in salespersonProfit) {
	sortedSalespersonProfit.push([person, salespersonProfit[person]])
}
sortedSalespersonProfit.sort(function (a, b) {
	return a[1] - b[1]
})

console.log(`${sortedSalespersonProfit.pop()} is the salesperson who made the most profit.`)

//which month had the most sales?
//months are stored as strings

//sale.purchase_date.slice(5,7)



let salesMonth = {}

dealershipDB.forEach(sale => {
	if (!(sale.purchase_date.slice(5, 7) in salesMonth)) {
		salesMonth[sale.purchase_date.slice(5, 7)] = 1
	} else {
		salesMonth[sale.purchase_date.slice(5, 7)] += 1
	}
})

let sortedSalesMonth = []

for (let month in salesMonth) {
	sortedSalesMonth.push([month, salesMonth[month]])
}
sortedSalesMonth.sort(function (a, b) {
	return a[1] - b[1]
})
console.log(`${sortedSalesMonth.pop()} had the most sales.`)
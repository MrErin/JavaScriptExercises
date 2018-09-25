//Which bank provided the most loans to our customers?

let bankData = {}

dealershipDB.forEach(sale => {
	if (!(sale.credit.credit_provider in bankData)) {
		bankData[sale.credit.credit_provider] = 1
	} else {
		bankData[sale.credit.credit_provider] += 1
	}
})

let sortedBankData = []

for (let bank in bankData) {
	sortedBankData.push([bank, bankData[bank]])
}
sortedBankData.sort(function (a, b) {
	return a[1] - b[1]
})

// console.log(sortedBankData.pop())
console.log(`${sortedBankData.pop()} provided the most loans to our customers.`)
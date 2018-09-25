//what was the total profit for 2017?
//confirmed all data in the database is from 2017

let profitData = []

dealershipDB.forEach(sale => {
	profitData.push(sale.gross_profit)
})

const profitReport = profitData.reduce((total, next) => total + next)

console.log(`Total profit this year: ${profitReport}.`)
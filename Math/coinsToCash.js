//calculate value of each denomination
const coinValue = (number, value) => number * value 

//store the value of each coin. fun game: make pennies worth $1M!
const pennyValue = 0.01
const nickelValue = 0.05
const dimeValue = 0.10
const quarterValue = 0.25
let dollarAmount = 0

//my piggy bank's name is Earl
const piggyBank = {
	pennies: 100,
	nickels: 132,
	dimes: 30,
	quarters: 5
}

//counts the change in the piggy bank
const countChange = (coinNumber, value) => {
	dollarAmount += coinValue(piggyBank.pennies, pennyValue)
	dollarAmount += coinValue(piggyBank.nickels, nickelValue)
	dollarAmount += coinValue(piggyBank.dimes, dimeValue)
	dollarAmount += coinValue(piggyBank.quarters, quarterValue)
	console.log('I\'ve got $' + dollarAmount.toFixed(2) + '!')
}

countChange()

//my pocket has no name, unlike my piggy bank
const pocketChange = {
	pennies: 0,
	nickels: 138,
	dimes: 0,
	quarters: 5
}

//counts only the amount of coins in my pockets and adds them to the already-calculated piggy bank value
const addPocketChange = (coinNumber, value) => {
	dollarAmount += coinValue(pocketChange.pennies, pennyValue)
	dollarAmount += coinValue(pocketChange.nickels, nickelValue)
	dollarAmount += coinValue(pocketChange.dimes, dimeValue)
	dollarAmount += coinValue(pocketChange.quarters, quarterValue)
	console.log('Now I\'ve got $' + dollarAmount.toFixed(2) + '!')
}

addPocketChange()
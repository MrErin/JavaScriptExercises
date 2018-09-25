//impure version
const randomizer = Math.floor(Math.random() * 7)
const possibleNames = ['Larry', 'Leon', 'Leona', 'Les', 'Laura', 'Lemony', 'Lars', 'Lekisha']


const llamaNamer = function () {
	const name = possibleNames[randomizer]
	return `${name} the llama`
}

console.log(llamaNamer())


//pure version. it's pure because it always returns the exact same thing (meaning, a name) and does not change anything outside of its own scope
const llamaNamer2 = function () {
	const possibleNames = ['Larry', 'Leon', 'Leona', 'Les', 'Laura', 'Lemony', 'Lars', 'Lekisha']
	const randomizer = Math.floor(Math.random() * 7)

	const namer2 = function () {
		const suffix = ' the llama'
		const name = possibleNames[randomizer]
		return name + suffix
	}

	return namer2
}

const nameMaker2 = llamaNamer2()
console.log(nameMaker2())
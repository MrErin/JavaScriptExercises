let employeeCards = []

// Saving the database:

const saveDatabase = () => {
	const stringifiedDatabase = JSON.stringify(employeeCards)
	localStorage.setItem('Employee Cards', stringifiedDatabase)
}

// Loading the database:

const loadDatabase = () => {
	const databaseString = localStorage.getItem('Employee Cards')
	employeeCards = JSON.parse(databaseString)
}


const determineSave = () => {
	loadDatabase()
	if (employeeCards == null) {
		employeeCards = []
		cardDataRollup()
		saveDatabase()
	} else if (employeeCards.length < 6) {
		employeeCards = []
		cardDataRollup()
	} else {
		saveDatabase()
	}
}
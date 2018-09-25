const loadDatabase = (localStorageKey) => {
	const databaseString = localStorage.getItem(localStorageKey)
	return JSON.parse(databaseString)
}

// load the database
const homeInv = loadDatabase('HomeInventory')

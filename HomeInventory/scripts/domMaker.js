//hook in the HTML
const stuffHook = document.querySelector('#myStuff')
const fragment = document.createDocumentFragment()

const displayStuff = (selectedType) => {
	//iterate over the tables in the database and apply selection criteria if present
	for (let type in homeInv) {
		if (type === selectedType || !selectedType) {
			homeInv[type].forEach(itemInArray => {
				const itemCard = componentFactory('section', '')
				itemCard.classList = ' ' + type + 'Card card'
				for (let prop in itemInArray) {
					if (prop === 'name'){
						const pName = componentFactory('h3', itemInArray[prop])
						pName.classList = 'cardTitle'
						appendinator(itemCard,pName)
					} else if (prop === 'location') {
						const pComponent = componentFactory('p', 'Location: ' + itemInArray[prop])
						pComponent.classList = 'cardLocation'
						appendinator(itemCard, pComponent)
					} else {
						const pComponent = componentFactory('p', 'Description: ' + itemInArray[prop])
						pComponent.classList = 'cardDescription'
						appendinator(itemCard, pComponent)
					}

				}
				appendinator(fragment, itemCard)
			})
		}
		appendinator(stuffHook, fragment)

	}
}
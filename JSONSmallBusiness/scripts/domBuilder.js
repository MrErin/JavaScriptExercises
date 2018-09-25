const contentHook = document.querySelector('#contentHook')
const fragment = document.createDocumentFragment()

const dataToCards = () => {
	employeeCards.forEach(card => {
		const title = componentFactory('h3', card.employeeName, 'title')
		const dept = componentFactory('p', card.departmentName, 'dept')
		const comp = componentFactory('p', card.computerName, '.comp')
		const section = componentFactory('section', '', 'card')
		appendinator(section, title)
		appendinator(section, dept)
		appendinator(section, comp)
		appendinator(fragment, section)
	})
	appendinator(contentHook, fragment)
}

dataToCards()
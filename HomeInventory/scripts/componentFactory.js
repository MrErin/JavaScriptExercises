const componentFactory = (type, contents) => {
	const component = document.createElement(type)
	component.textContent = contents
	return component
}



const componentFactory = (type, contents, classes) => {
	const component = document.createElement(type)
	component.textContent = contents
	component.classList = classes
	return component
}


const appendinator = (parent, child) => {
	parent.appendChild(child)
}
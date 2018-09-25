const stuffFilter = () => {
	//grab the value selected in the dropdown when the button was clicked
	const stuffList = document.getElementById('things')
	const selStuff = stuffList.options[stuffList.selectedIndex].value

	//hook for the cards
	const stuffHook = document.querySelector('#myStuff')

	//remove existing elements before adding the filtered list
	if (stuffHook.hasChildNodes()){
		while (stuffHook.firstChild) {
			stuffHook.removeChild(stuffHook.firstChild)
		}
	}
	//add the stuff cards back to the DOM
	displayStuff(selStuff)
}
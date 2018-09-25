
const yearFilter = () => {
	//grab the value selected in the dropdown when the button was clicked
	const yearList = document.getElementById('years')
	const selYear = yearList.options[yearList.selectedIndex].text
    
	//hook for the cards
	const article = document.querySelector('#visited')


	//remove existing elements before adding the filtered list
	if (article.hasChildNodes()){
		while (article.firstChild) {
			article.removeChild(article.firstChild)
		}
	} 
	//add the requested city cards to the DOM
	visitedDOMBuilder(selYear)
	
}
//grabs the hook for the visited div in the HTML
const visitedHook = document.querySelector('#visited')
const fragment = document.createDocumentFragment()

const visitedDOMBuilder = (year) => {
	citiesDB.cities.forEach(
		(currentCity) => {
			//only display cities filtered by year visited.
			//if no filter value, display all cities
			//filter out the null row that I've mysteriously created
			if (!year || year === currentCity.yearVisited) {
				//section
				const citySection = document.createElement('section')

				//apply classes based on continent
				if (currentCity.continent === 'North America'){
					citySection.classList += 'northAmerica'
				} else if (currentCity.continent === 'Europe'){
					citySection.classList += 'europe'
				}
                
				//h1 city name
				const cityDisplayName = document.createElement('h1')
				cityDisplayName.classList += 'cityName'
				cityDisplayName.textContent = currentCity.cityName
				citySection.appendChild(cityDisplayName)

				//h3 city state/country
				const cityDisplayState = document.createElement('h3')
				cityDisplayState.classList += 'cityStateCountry'
				cityDisplayState.textContent = currentCity.cityStateCountry
				citySection.appendChild(cityDisplayState)

				//h4 year visited
				const yearVisitedDisplay = document.createElement('h4')
				yearVisitedDisplay.classList += 'yearVisited'
				yearVisitedDisplay.textContent = 'Visited in ' + currentCity.yearVisited
				citySection.appendChild(yearVisitedDisplay)

				//image
				const cityDisplayImage = document.createElement('img')
				cityDisplayImage.classList += 'cityImage'
				cityDisplayImage.src = `${currentCity.cityImage}`
				citySection.appendChild(cityDisplayImage)

				//attractions list
				let top5ListDisplay = document.createElement('ol')
				top5ListDisplay.classList += 'top5List'
				for (let i = 0; i < currentCity.top5.length; i++) {
					let top5ListElementDisplay = document.createElement('li')
					top5ListElementDisplay.textContent = currentCity.top5[i]
					top5ListDisplay.appendChild(top5ListElementDisplay)	
				}
				citySection.appendChild(top5ListDisplay)

				//append city card to the DOM
				fragment.appendChild(citySection)
			}
		}
	
	)
	visitedHook.appendChild(fragment)
}
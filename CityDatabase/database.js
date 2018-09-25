const cityDatabase = {}

cityDatabase.cities = []

cityDatabase.cities.push(
	{
		cityName: 'London', 
		cityStateCountry: 'England, UK', 
		yearVisited: '2000', 
		cityImage:'./img/london.jpg', 
		top5: ['The London Blitz - Museum of the City', 'Kensington Gardens', 'Tower of London', 'Thames Path', 'Portobello Road Market'], 
		continent: 'Europe'
	},
	{ 
		cityName: 'Deerfield Beach', 
		cityStateCountry: 'FL, USA', 
		yearVisited: '2000', 
		cityImage: './img/deerfieldbeach.jpg', 
		top5: ['Florida Renaissance Festival', 'these', 'places', 'are', 'small towns'], 
		continent: 'North America'
	},
	{
		cityName: 'Tuxedo', 
		cityStateCountry: 'NY, USA', 
		yearVisited: '2000', 
		cityImage: './img/tuxedo.jpg', 
		top5: ['New York Renaissance Faire', 'these', 'places', 'are', 'small towns'], 
		continent: 'North America'
	},
	{
		cityName: 'Paris', 
		cityStateCountry: 'France', 
		yearVisited: '2000', 
		cityImage: './img/paris.jpg', 
		top5: ['Eiffel Tower', 'Louvre Museum', 'Museum of Vampires and Legendary Creatures', 'Petite Ceinture', 'Catacombs de Paris'], 
		continent: 'Europe'
	},
	{
		cityName: 'Brighton', 
		cityStateCountry: 'England, UK', 
		yearVisited: '2006', 
		cityImage: './img/brighton.jpg', 
		top5: ['West Pier', 'Royal Suspension Chain Pier', 'Victorian Sewers', 'Royal Pavillion', 'Something Else'], 
		continent: 'Europe'
	},
	{
		cityName: 'Toronto', 
		cityStateCountry: 'Ontario, Canada', 
		yearVisited: '1988', 
		cityImage: './img/toronto.jpg', 
		top5: ['The Monkey\'s Paw', 'Casa Loma', 'Lower Bay Station', 'Leslieville\'s Crazy Doll House', 'Sewers of Toronto'], 
		continent: 'North America'
	},
	{
		cityName: 'Holly', 
		cityStateCountry: 'MI, USA', 
		yearVisited: '2001', 
		cityImage: './img/holly.jpg', 
		top5: ['Michigan Renaissance Festival', 'these', 'places', 'are', 'small towns'],
		continent: 'North America'
	},
	{
		cityName: 'Larkspur', 
		cityStateCountry: 'CO, USA', 
		yearVisited: '2008', 
		cityImage: './img/larkspur.jpg', 
		top5: ['Colorado Renaissance Festival', 'these', 'places', 'are', 'small towns'], 
		continent: 'North America'
	},
	{
		cityName: 'Jasper', 
		cityStateCountry: 'FL, USA', 
		yearVisited: '2001', 
		cityImage: './img/jasper.png', 
		top5: ['North Floriday Renaissance Festival', 'these', 'places', 'are', 'small towns'], 
		continent: 'North America'
	},
	{
		cityName: 'Todd Mission', 
		cityStateCountry: 'TX, USA', 
		yearVisited: '2000', 
		cityImage: './img/ToddMission.jpg', 
		top5: ['Texas Renaissance Festival', 'these', 'places', 'are', 'small towns'], 
		continent: 'North America'

	}

)


//save the database funciton

const saveDatabase = (databaseObject, localStorageKey) => {
	const stringifiedDatabase = JSON.stringify(databaseObject)
	localStorage.setItem(localStorageKey, stringifiedDatabase)
}

//invoke the save database function

saveDatabase(cityDatabase, 'cities')

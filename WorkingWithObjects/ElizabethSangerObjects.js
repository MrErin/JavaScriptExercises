const vol = {
	name: 'Morticia Addams',
	address: '666 Mockingbird Lane',
	email: 'spellsandhexes@gmail.com',
	phoneNumber: '0123456789',
	availability: 'only at night',
	activities: 'posting flyers in graveyards, scaring bullies away from the polls'
}

const candidate = {
	district: 'TN5',
	name: 'Beth',
	bio: 'Did stuff and was awesome'
}

const platform = [
	{
		name: 'Taxes',
		value: 'You like roads and schools, don\'t you?'
	},
	{
		name: 'Jobs',
		value: 'Everyone able works'
	},
	{
		name: 'Infrastructure',
		value: 'See: taxes'
	},
	{
		name: 'Healthcare',
		value: 'Important to the living'
	},
	{
		name: 'Crime and Enforcement',
		value: 'Government-issued Jiminy Crickets'

	},
	{
		name: 'Mission',
		value: 'Taking care of business'
	}
]

const calendarOfEvents = [
	{    eventDate: '1/1/2018',
		eventStartTime: '12:00:00',
		eventEndTime: '12:00:01',
		eventTitle: 'One second fiesta'
	},
	{
		eventDate: '1/1/2018',
		eventStartTime: '8:00:00',
		eventEndTime: '10:00:00',
		eventTitle: 'Breakfast fundraiser'
	}
]

const imgGallery = [
	{
		src: 'headshot.jpg',
		height: '400px',
		width: '300px',
		alt: 'Headshot of Elizabeth Sanger'
	},
	{
		src: 'thefam.jpg',
		height: '400px',
		width: '300px',
		alt: 'Picture of people related to Elizabeth Sanger'
	},
	{
		src: 'constituents.jpg',
		height: '400px',
		width: '300px',
		alt: 'Constituent photos because why not?'
	}
] 

const webAddresses = [
	{
		aTitle: 'Donation Link',
		aHref: 'gimmemoney.com'
	},
	{
		aTitle: 'Please vote, smart person.',
		aHref: 'govotedummies.com'
	}
]

console.log(vol.name + '\'s Current Phone: ' + vol.phoneNumber)
const modVolPhone = () => vol.phoneNumber = '666'
modVolPhone()
console.log(vol.name + '\'s New Phone: ' + vol.phoneNumber)

console.log('Candidate\'s Current Name: ' + candidate.name)
const modCandidate = () => candidate.name = 'Elizabeth Sanger'
modCandidate()
console.log('Candidate\'s New Name: ' + candidate.name)

console.log('Current Mission: ' + platform[5].value)
const modPlatform = () => platform[5].value = 'Doin\' stuff'
modPlatform()
console.log('New Mission: ' + platform[5].value)

console.log('Current Event Title: ' + calendarOfEvents[0].eventTitle)
const modEvent = () => calendarOfEvents[0].eventTitle = 'One second party!'
modEvent()
console.log('New Event Title: ' + calendarOfEvents[0].eventTitle)

console.log('Current Headshot Alt Text: ' + imgGallery[0].alt)
const modImg = () => imgGallery[0].alt = 'Big picture of a face'
modImg()
console.log('New Headshot Alt Text: ' + imgGallery[0].alt)

console.log('Current URL Title: ' + webAddresses[1].aTitle)
const modURL = () => webAddresses[1].aTitle = 'Register to vote, dummy!'
modURL()
console.log('New URL Title: ' + webAddresses[1].aTitle)



const jest = {
	title: 'the infinite jest',
	author: 'David Foster Wallace',
	publishDate: '1 February 1996'
}


const jestArticle = document.createElement('article')
jestArticle.setAttribute('id', jest.title)
jestArticle.textContent = jest.author

const documentBody = document.querySelector('#body')
documentBody.appendChild(jestArticle)


const modifyJest = (theObject, theProperty, theNewValue) => {
	theObject[theProperty] = theNewValue
}

modifyJest(jest, 'publishDate', '31 March 1997')
console.log(jest)
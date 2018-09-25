// create database
const HomeInventoryDatabase = {}

//create tables in the database
HomeInventoryDatabase.stuff = []
HomeInventoryDatabase.books = []
HomeInventoryDatabase.bigTicket = []



//big ticket items
const laptop = {
	name: 'Laptop',
	location: 'My desk, or my laptop bag, which is sometimes in my car or at my desk or in a different location entirely',
	description: 'It\'s a laptop big enough to survive being weaponized if required.'
}

const cameraGear = {
	name: 'Camera Gear',
	location: 'In the cave guarded by a dragon',
	description: 'DSLR, lenses, and a bunch of cool gadgety things'
}

const sewingMachine = {
	name: 'Bertha',
	location: 'Inside a bag sewn on the sewing machine inside a case under a bed /recursion',
	description: 'Bernina from the 1970s that sounds like a muscle car when it gets going'
}

const iPad = {
	name: 'Penmonkey',
	location: 'Computer bag',
	description: 'I use it to write novels and am learning to draw on it.'
}

//books

const mementoMori = {
	name: 'Memento Mori: Victorian Postmortem Photography',
	location: 'Nightstand for bedtime reading',
	description: 'The book that creeps everyone out'
}

const wonderBook = {
	name: 'Wonderbook',
	location: 'Shelf above the writing desk',
	description: 'Book about writing fiction that looks like it was drawn by Salvador Dali while visiting Willy Wonka\'s factory.'
}

const safeBook = {
	name: 'Book safe',
	location: 'Bookshelf',
	description: 'Booksafe my sister made me out of an old copy of the Necronomicon'
}

const completeCH = {
	name: 'The Complete Calvin and Hobbes',
	location: 'Bookshelf',
	description: 'Hardback books containing every Calvin and Hobbes cartoon. Very heavy. Also could be weaponized.'
}

const kindle = {
	name: 'Rhymes With Grendel',
	location: 'Beside the armchair',
	description: 'Contains all of the words'
}

const stolenBook = {
	name: 'The Hobbit',
	location: 'Bookshelf',
	description: 'I stole the beautifully illustrated edition from the Nashville Library as a kid. Don\'t get mad at me; my mom took the cost out of my allowance.'
}

const voynch = {
	name: 'The Voynch Manuscript',
	location: 'Bookshelf',
	description: 'Weird document of unclear origin or purpose, posibly a botanical or medical text'
}

//stuff
const fabric = {
	name: 'Fabric stash',
	location: 'Boxes under the bed, in the closet, in the barn, and beneath the couch.',
	description: 'Awesome fabric'
}

const jonathanBlanket = {
	name: 'Jonathan Blanket',
	location: 'My chair or on Oz\'s bed',
	description: 'Jonathan made it for me when we were dating. It\'s warm and perfectly weighted and our son constantly steals it because it\'s the most perfect blanket ever made.'
}

const pen = {
	name: 'Awesome pen',
	location: 'My desk',
	description: 'It\'s a big, heavy fountain pen that lays down a beautiful line. I use it for writing.'
}

//put stuff in the tables
HomeInventoryDatabase.bigTicket.push(laptop, cameraGear, sewingMachine, iPad)
HomeInventoryDatabase.books.push(mementoMori, wonderBook, safeBook, completeCH, kindle, stolenBook, voynch)
HomeInventoryDatabase.stuff.push(fabric, jonathanBlanket, pen)


const saveDatabase = (databaseObject, localStorageKey) => {
	const stringifiedDatabase = JSON.stringify(databaseObject)
	localStorage.setItem(localStorageKey, stringifiedDatabase)
}


//save the database
saveDatabase(HomeInventoryDatabase, 'HomeInventory')
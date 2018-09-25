//Iterate through the following array of objects and if the gender is "F", console log the name.
const students = [
	{
		name: 'Cashew',
		gender: 'F'
	},
	{
		name: 'Rachael',
		gender: 'F'
	},
	{
		name: 'Joshua',
		gender: 'M'
	},
	{
		name: 'Daniel',
		gender: 'M'
	},
	{
		name: 'Jacob',
		gender: 'M'
	},
	{
		name: 'Paul',
		gender: 'M'
	},
	{
		name: 'Meghan',
		gender: 'F'
	},
	{
		name: 'Hayley',
		gender: 'F'
	},
	{
		name: 'Deanna',
		gender: 'F'
	},
	{
		name: 'Kyle',
		gender: 'M'
	}
]


// women = students.forEach(element => {
//     if (students.gender === "F") {
//         console.log(students.name);
//     }
    
// });
// women = () => {
//     for (let i = 0; i < students.length; i++) {
//         if (students.gender === "F"){
//         console.log(students.name);
//     }
//     }
// }

let listElementW = document.getElementById('women')
let listElementM = document.getElementById('men')
for (let i = 0; i < students.length; i++) {
	if (students[i].gender === 'F') {
		let liElement = document.createElement('li')
		let textNode = document.createTextNode('The name is ' + students[i].name)
		liElement.appendChild(textNode)
		listElementW.appendChild(liElement)
	}
	if (students[i].gender === 'M') {
		let liElement = document.createElement('li')
		let textNode = document.createTextNode('The name is ' + students[i].name)
		liElement.appendChild(textNode)
		listElementM.appendChild(liElement)
	}
}


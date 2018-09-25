/*Exercise:
1. Create a variable to hold the value of the day of the week.

2. Write a switch statement that will check the value of the variable. The switch statement will console log the following for each day of the week:
Monday: "Happy Monday!"
Tuesday: "It's Tuesday. You got this!"
Wednesday:"Hump day already!"
Thursday: "Just one more day 'til the weekend!"
Friday: "Happy Friday!"
Saturday: "Have a wonderful Saturday!"
Sunday: "It's Sunday, time to relax!"

Challenge:
Add a default case to the switch statement that console logs "Please specify a day of the week." Change the value of your variable to see your default case being executed.

Advanced Challenge:
Change the switch statement so that for all weekdays, it console logs "Weekday" and for Saturday and Sunday, it console.logs "Weekend"
*/

let varDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

varDays.forEach(day =>{
	if(day === 'Saturday' || day === 'Sunday') {
		console.log('Weekend')
	} else {
		console.log('Weekday')
	}
	switch (day) {
	case 'Monday':
		console.log('Happy Monday!')
		break
	case 'Tuesday':
		console.log('It\'s Tuesday. You got this!')
		break
	case 'Wednesday':
		console.log('Hump day already!')
		break
	case 'Thursday':
		console.log('Just one more day \'til the weekend!')
		break
	case 'Friday':
		console.log('Happy Friday!')
		break
	case 'Saturday':
		console.log('Have a wonderful Saturday!')
		break
	case 'Sunday':
		console.log('It\'s Sunday, time to relax!')
		break
	default:
		console.log('Please specify a day of the week')
	}
})
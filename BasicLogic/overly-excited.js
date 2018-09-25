// // Create an array that contains the words in the sentence
let sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon']
let betterSentence = ['Wants', 'pawn', 'term', 'dare', 'worsted', 'ladle', 'gull', 'hoe', 'lift', 'wetter', 'murder', 'inner', 'ladle', 'cordage', 'honor', 'itch', 'offer', 'lodge', 'dock', 'florist']
let buildMeUp = ''

// function addExcitement(theWordArray, punctuation) {
// // Each time the for loop executes, you're going to add one more word to this string
// 	let buildMeUp = ''
// 	let bangs = ''

// 	for (let i = 1; i < theWordArray.length + 1; i++) {
// 		if(i % 3 === 0){
// 			bangs += punctuation
// 			buildMeUp += theWordArray[i-1] + bangs            
// 			buildMeUp += ' '
// 		} else {
// 			buildMeUp += theWordArray[i-1] + ' '
// 		}
// 		console.log(buildMeUp)
// 	}
// }

// // Invoke the function and pass in the array
// addExcitement(sentence, ':')
// addExcitement(betterSentence, '%')

//this makes it into a function expression rather than a function declaration
const addArrow = (theWordArray, punctuation) => {
	//create a variable to store the stacked punctuation in the exact same way buildMeUp stores the stacked words
	let bangs = ''

	//for loop goes through each word in the array. I start the counter (i) at 1 instead of 0 in order to accurately count every third word for the punctuation. Because of this offset, I need to set the end of the counter at theWordArray.length + 1. Otherwise, it would cut off the last word in the sentence.
	for (let i = 1; i < theWordArray.length + 1; i++) {
		//IF checks whether the counter is on a third word. 
		if (i % 3 === 0) {
			//if we're on a third word, we will add 1 punctuation element (set in the function call) to the "bangs" stack. 
			bangs += punctuation
			//the word stack will be built every third word by adding the next word, the bangs stack, and a space. Note theWordArray[i-1]. The "-1" offset is because i was set to 1 instead of 0 in the "for" loop
			buildMeUp += theWordArray[i - 1] + bangs + ' '
		//if we're not on a third word...
		} else {
			//we add a word and a space to the word stack with no punctuation stack
			buildMeUp += theWordArray[i - 1] + ' '
		}
		console.log(buildMeUp)
	}
}
addArrow(sentence, '!')
addArrow(betterSentence, '$')
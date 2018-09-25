const hook = document.querySelector('#messages')
const fragment = document.createDocumentFragment()

const chat = ['a', 'b', 'a', 'b', 'a']




const repeatingDOMBuilder = () => {
	chat.forEach(
		(itemInArray) => {
			//create section
			const chatBubble = document.createElement('section')

			//create chat message

			// const chatContent = document.createElement('p')

			chatBubble.textContent = itemInArray
			// chatBubble.appendChild(chatContent)
			fragment.appendChild(chatBubble)
		})
	document.querySelector('#messages').appendChild(fragment)
        
}


repeatingDOMBuilder()
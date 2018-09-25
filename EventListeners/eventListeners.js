/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

const toggleClass = (section, className1, className2) => {
	const domSection = section
	domSection.classList.toggle(className1)
	domSection.classList.toggle(className2)
}
document.querySelector('#activate-flight').addEventListener('click', function () {
	toggleClass(document.querySelector('#flight'), 'disabled', 'enabled')
})




/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/

document.querySelector('#activate-mindreading').addEventListener('click', function () {
	toggleClass(document.querySelector('#mindreading'), 'disabled', 'enabled')
})

document.querySelector('#activate-xray').addEventListener('click', function () {
	toggleClass(document.querySelector('#xray'), 'disabled', 'enabled')
})



/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

const powers = document.querySelectorAll('section')

const activate = () => {
	[].forEach.call(powers, function(power) {
		power.classList = 'power enabled'
	})
}

const deactivate = () => {
	[].forEach.call(powers, function(power) {
		power.classList = 'power disabled'
	})
}



document.querySelector('#activate-all').addEventListener('click', function() {
	activate()    
})

document.querySelector('#deactivate-all').addEventListener('click', function() {
	deactivate()
})
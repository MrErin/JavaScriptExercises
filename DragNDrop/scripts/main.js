const DragDropManager = Object.create(null, {
	init: {
		value: () => {
			//select all cards
			const stages = document.querySelectorAll('.stage')

			stages.forEach(stage => {
				// Gain reference of item being dragged
				stage.ondragstart = e => {
					//?
					e.dataTransfer.setData('text', e.target.classList)
				}
			})

			//target class is one of the two boxes
			const targets = document.querySelectorAll('.target')

			targets.forEach(target => {
				// Dragover not supported by default. Turn that off.
				target.ondragover = e => e.preventDefault()

				target.ondrop = e => {
					// Enabled dropping on targets
					e.preventDefault()

					// Determine what's being dropped
					const data = e.dataTransfer.getData('text')

					// Append card to target component as child
					// TODO: This should only happen if the target has no children nodes
					// TODO: This should not happen if the target is another stage card
                    
					if (!(e.target.hasChildNodes()) || e.target.classList.contains('readyStage')) {
						e.target.appendChild(document.querySelector(`.${data.split(' ')[1]}`))
					}
				}
			})
		}
	}
})
DragDropManager.init()

window.onload = function() {
	const leftButton = document.querySelector('.leftButton')
	const upButton = document.querySelector('.upButton')
	const rightButton = document.querySelector('.rightButton')
	const downButton = document.querySelector('.downButton')
	const blueButton = document.querySelector('.blueButton')
	const greenButton = document.querySelector('.greenButton')
	const redButton = document.querySelector('.redButton')
	const randomButton = document.querySelector('.randomButton')
	const resetButton = document.querySelector('.resetButton')
	const circle = document.querySelector('.circle')

	const initialTop = circle.offsetTop
	const initialLeft = circle.offsetLeft
	let mousedownID = -1

	function wait(ms){
	   const start = new Date().getTime()
	   let end = start
	   while(end < start + ms) {
	     end = new Date().getTime()
	  }
	}

	function moveLeft() {
		const newPosition = circle.offsetLeft - 25
		if (newPosition < -2) {
			return
		} else {
			circle.style.left = newPosition + 'px'
		}
	}

	function moveUp() {
		const newPosition = circle.offsetTop - 25 
		if (newPosition < -2) {
			return
		} else {
			circle.style.top = newPosition + 'px'
		}
	}

	function moveDown() {
		const newPosition = circle.offsetTop + 25
		if (initialTop*2 < newPosition){
			return
		} else {
			circle.style.top = newPosition + 'px'
		}
	}

	function moveRight() {
		const newPosition = circle.offsetLeft + 25
		if (initialLeft*2 < newPosition) {
			return
		} else {
			circle.style.left = newPosition + 'px'		
		}
	}

	function chooseMovement(key) {
		wait(20)
		switch (key) {
			case 37:
				moveLeft()
				break
			case 38:
				moveUp()
				break
			case 39:
				moveRight()
				break
			case 40:
				moveDown()
				break				
			default:
				return
		}	
	}

	function mouseDownInterval(number){
		if(mousedownID === -1) {
			mousedownID = setInterval(function(){
				chooseMovement(number)
			}, 50)
		}
	}

	function mouseUpinterruption() {
		if(mousedownID !== -1) {
			clearInterval(mousedownID)
			mousedownID = -1
		}
	}

	blueButton.addEventListener('click', function(){circle.style.backgroundColor = '#0000FF'})
	greenButton.addEventListener('click', function(){circle.style.backgroundColor = '#00FF00'})
	redButton.addEventListener('click', function(){circle.style.backgroundColor = '#FF0000'})

	document.addEventListener('keydown', function(){chooseMovement(event.keyCode)})
	leftButton.addEventListener('mousedown', function(){mouseDownInterval(37)})
	document.addEventListener('mouseup', mouseUpinterruption)
	upButton.addEventListener('mousedown', function(){mouseDownInterval(38)})
	rightButton.addEventListener('mousedown', function(){mouseDownInterval(39)})
	downButton.addEventListener('mousedown', function(){mouseDownInterval(40)})
	randomButton.addEventListener('mousedown', function(){
		if(mousedownID === -1) {
			mousedownID = setInterval(function(){
				const randomDirection = Math.ceil(Math.random() * (40 - 36) + 36)
				chooseMovement(randomDirection)
			}, 50)
		}
	})
	randomButton.addEventListener('mouseup', mouseUpinterruption)
	resetButton.addEventListener('click', function(){
		circle.style.left = initialLeft + 'px'
		circle.style.top = initialTop + 'px'
	})

}
	





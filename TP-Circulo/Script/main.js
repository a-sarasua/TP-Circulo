window.onload = function() {
	const MOVEMENT = 25

	const leftButton = document.querySelector('.leftButton')
	const upButton = document.querySelector('.upButton')
	const rightButton = document.querySelector('.rightButton')
	const downButton = document.querySelector('.downButton')

	const blueButton = document.querySelector('.blueButton')
	const greenButton = document.querySelector('.greenButton')
	const redButton = document.querySelector('.redButton')

	const playButton = document.querySelector('.playButton')
	const pauseButton = document.querySelector('.pauseButton')
	const resetButton = document.querySelector('.resetButton')

	const circle = document.querySelector('.circle')

	const initialTop = circle.offsetTop
	const initialLeft = circle.offsetLeft
	let mousedownID = -1
	let randomOff = true
	let playerPressed = false

	function wait(ms){
	   const start = new Date().getTime()
	   let end = start
	   while(end < start + ms) {
	     end = new Date().getTime()
	  }
	}

	function moveLeft() {
		let newPosition = circle.offsetLeft - MOVEMENT
		if (newPosition < -(100 + MOVEMENT)){
			circle.classList.add('circleOutside')
			newPosition = initialLeft * 2 + 100
		}
		circle.style.left = newPosition + 'px'
		setTimeout(function(){
			circle.classList.remove('circleOutside')
		}, 50)
	}

	function moveUp() {
		let newPosition = circle.offsetTop - MOVEMENT 
		if (newPosition < -(100 + MOVEMENT)){
			circle.classList.add('circleOutside')
			newPosition = initialTop * 2 + 100
		}
		circle.style.top = newPosition + 'px'
		setTimeout(function(){
			circle.classList.remove('circleOutside')
		}, 50)
	}

	function moveDown() {
		let newPosition = circle.offsetTop + MOVEMENT
		if ((initialTop*2 + (100+MOVEMENT)) < newPosition){
			circle.classList.add('circleOutside')
			newPosition = -100
		}
		circle.style.top = newPosition + 'px'
		setTimeout(function(){
			circle.classList.remove('circleOutside')
		}, 50)	
	}

	function moveRight() {
		let newPosition = circle.offsetLeft + 25
		if ((initialLeft*2 + (100+MOVEMENT))< newPosition){
			circle.classList.add('circleOutside')
			newPosition = -100
		}
		circle.style.left = newPosition + 'px'
		setTimeout(function(){
			circle.classList.remove('circleOutside')
		}, 50)			
	}

	function chooseMovement(key) {
		if(playerPressed && !randomOff){
			return
		} else {
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
	}

	function movementInterval(number){
		if(mousedownID === -1) {
			mousedownID = setInterval(function(){
				chooseMovement(number)
			}, 50)
		}
	}

	function movementInterrupt() {
		if(mousedownID !== -1 && randomOff) {
			clearInterval(mousedownID)
			mousedownID = -1
		}
	}

	blueButton.addEventListener('click', function(){circle.style.backgroundColor = '#0000FF'})
	greenButton.addEventListener('click', function(){circle.style.backgroundColor = '#00FF00'})
	redButton.addEventListener('click', function(){circle.style.backgroundColor = '#FF0000'})

	document.addEventListener('keydown', function(){
		playerPressed = true
		chooseMovement(event.keyCode)
		playerPressed = false
	})

	leftButton.addEventListener('mousedown', function(){movementInterval(37)})
	upButton.addEventListener('mousedown', function(){movementInterval(38)})
	rightButton.addEventListener('mousedown', function(){movementInterval(39)})
	downButton.addEventListener('mousedown', function(){movementInterval(40)})
	document.addEventListener('mouseup', movementInterrupt)

	playButton.addEventListener('click', function(){
		randomOff = false
		if(mousedownID === -1) {
			mousedownID = setInterval(function(){
				const randomDirection = Math.ceil(Math.random() * (40 - 36) + 36)
				chooseMovement(randomDirection)
			}, 50)
		}
	})
	pauseButton.addEventListener('click', function(){
		randomOff = true
		movementInterrupt()
	})

	resetButton.addEventListener('click', function(){
		if(!randomOff) {
			randomOff = true
			movementInterrupt()
		}
		circle.style.left = initialLeft + 'px'
		circle.style.top = initialTop + 'px'
	})

}
	